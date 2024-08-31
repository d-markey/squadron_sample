import 'dart:async';
import 'dart:typed_data';

import 'package:cancelation_token/cancelation_token.dart';
import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import '../../root_logger.dart';
import 'pi_digits_service.dart';
import 'pi_digits_worker_pool.dart';

class PiDigitsPage extends StatefulWidget {
  const PiDigitsPage({super.key, this.tabBar});

  final _count = 5000;

  final TabBar? tabBar;

  @override
  State<PiDigitsPage> createState() => _PiDigitsPageState();
}

class _PiDigitsPageState extends State<PiDigitsPage> {
  _PiDigitsPageState();

  late final _digits = Uint8List(widget._count);
  bool _cancel = false;
  CancelableToken? _cancelToken;
  Timer? _computing;

  final _piDigitsService = PiDigitsServiceImpl();
  final PiDigitsWorkerPool _piDigitsWorkerPool = PiDigitsWorkerPool(
      const ConcurrencySettings(minWorkers: 7, maxWorkers: 7))
    ..start();

  @override
  void dispose() {
    _computing?.cancel();
    _computing = null;
    _piDigitsWorkerPool.stop();
    super.dispose();
  }

  void _startCompute() {
    rootLogger.i('start computing digits...');
    _cancel = false;
    _cancelToken = CancelableToken();
    _digits.fillRange(0, _digits.length, 0);
    _computing = Timer.periodic(const Duration(milliseconds: 100), (timer) {
      setState(() {});
    });
    setState(() {});
  }

  void _stopCompute() {
    setState(() {
      _computing?.cancel();
      _computing = null;
      rootLogger.i('digits computed.');
    });
  }

  Future _loadNDigits(int start, int batch, Stream<int> digits) async {
    try {
      var i = start;
      await for (var d in digits) {
        _digits[i++] = d;
      }
      rootLogger.i(
          '[_loadNDigits] computation for batch $start-${start + batch - 1} completed successfully');
    } on CanceledException catch (e) {
      rootLogger.i(
          '[_loadNDigits] computation for batch $start-${start + batch - 1} cancelled: ${e.message}');
    } on WorkerException catch (e) {
      rootLogger.i(
          '[_loadNDigits] computation for batch $start-${start + batch - 1} failed: ${e.message}');
    } catch (e) {
      rootLogger.i(
          '[_loadNDigits] computation for batch $start-${start + batch - 1} failed: $e');
    }
  }

  void _loadDigitsWithoutWorkers() async {
    _startCompute();
    try {
      await Future.delayed(const Duration(seconds: 1));

      var sw = Stopwatch()..start();
      if (_cancel) {
        rootLogger
            .i('[_loadDigitsWithoutWorkers] computation has been cancelled');
      } else {
        _digits.fillRange(0, _digits.length, 0);
        try {
          await _loadNDigits(0, widget._count,
              _piDigitsService.getNDigits(0, widget._count, _cancelToken));
          rootLogger.i('[_loadDigitsWithoutWorkers] computation completed');
        } on CanceledException {
          _cancel = true;
          rootLogger.i(
              '[_loadDigitsWithoutWorkers] computation has been cancelled by user');
        }
      }
      sw.stop();

      rootLogger.i('[_loadDigitsWithoutWorkers] elapsed = ${sw.elapsed}');
    } catch (e, st) {
      rootLogger.i('[_loadDigitsWithWorkerPool] ERROR = $e');
      rootLogger.i('[_loadDigitsWithWorkerPool] TRACE = $st');
    } finally {
      if (!_cancel) {
        await Future.delayed(const Duration(seconds: 1));
      }
      _stopCompute();
    }
  }

  void _loadDigitsWithWorkerPool() async {
    _startCompute();

    try {
      var sw = Stopwatch()..start();
      if (_cancel) {
        rootLogger
            .i('[_loadDigitsWithWorkerPool] computation has been cancelled');
      } else {
        _digits.fillRange(0, _digits.length, 0);
        final futures = <Future>[];
        final nb = (widget._count %
                    _piDigitsWorkerPool.concurrencySettings.maxWorkers >
                0)
            ? _piDigitsWorkerPool.concurrencySettings.maxWorkers + 1
            : _piDigitsWorkerPool.concurrencySettings.maxWorkers;
        var batch = widget._count ~/ nb;
        var start = 0;
        while (start < widget._count) {
          if (start + batch > widget._count) {
            batch = widget._count - start;
          }
          futures.add(_loadNDigits(start, batch,
              _piDigitsWorkerPool.getNDigits(start, batch, _cancelToken)));
          start += batch;
        }
        rootLogger.i(
            '[_loadDigitsWithWorkerPool] computation started with ${futures.length} batches');
        try {
          await Future.wait(futures);
          rootLogger.i('[_loadDigitsWithWorkerPool] computation completed');
        } on CanceledException {
          _cancel = true;
          rootLogger.i(
              '[_loadDigitsWithWorkerPool] computation has been cancelled by user');
        }
      }

      sw.stop();
      rootLogger.i('[_loadDigitsWithWorkerPool] elapsed = ${sw.elapsed}');
    } catch (e, st) {
      rootLogger.i('[_loadDigitsWithWorkerPool] ERROR = $e');
      rootLogger.i('[_loadDigitsWithWorkerPool] TRACE = $st');
    } finally {
      if (!_cancel) {
        await Future.delayed(const Duration(seconds: 1));
      }
      _stopCompute();
    }
  }

  void _cancelTasks() {
    _cancel = true;
    _cancelToken?.cancel();
    // widget._pool.cancel();
  }

  static String _hex(int d) => d.toRadixString(16);

  String get _pi => '${_hex(_digits[0])}.${_digits.skip(1).map(_hex).join('')}';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('SQUADRON SAMPLE - PI DIGITS'),
          bottom: widget.tabBar,
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'First ${widget._count} hexadecimal digits of Pi:',
              ),
              Expanded(child: SingleChildScrollView(child: Text(_pi))),
            ],
          ),
        ),
        floatingActionButton: (_computing != null)
            ? Row(mainAxisAlignment: MainAxisAlignment.end, children: [
                Text('tick = ${_computing?.tick}',
                    style: const TextStyle(
                        backgroundColor: Colors.blue, color: Colors.white)),
                FloatingActionButton(
                  onPressed: _cancelTasks,
                  tooltip: 'Cancel',
                  child: const Text('Cancel', textAlign: TextAlign.center),
                )
              ])
            : Row(mainAxisAlignment: MainAxisAlignment.end, children: [
                FloatingActionButton(
                  onPressed: _loadDigitsWithoutWorkers,
                  tooltip: 'No Pool',
                  child: const Text('No Pool', textAlign: TextAlign.center),
                ),
                FloatingActionButton(
                  onPressed: _loadDigitsWithWorkerPool,
                  tooltip: 'Pool',
                  child: const Text('Pool', textAlign: TextAlign.center),
                ),
              ]));
  }
}
