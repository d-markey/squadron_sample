import 'dart:async';
import 'dart:developer';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import 'pi_digits_service.dart';
import 'pi_digits_worker_pool.dart';

class PiDigitsPage extends StatefulWidget {
  PiDigitsPage({Key? key, this.tabBar}) : super(key: key);

  final _count = 5000;

  final TabBar? tabBar;

  final PiDigitsWorkerPool _pool = PiDigitsWorkerPool(
      const ConcurrencySettings(minWorkers: 8, maxWorkers: 8, maxParallel: 2));

  @override
  State<PiDigitsPage> createState() => _PiDigitsPageState();
}

class _PiDigitsPageState extends State<PiDigitsPage> {
  _PiDigitsPageState();

  List<int> _digits = const <int>[];
  bool _cancel = false;
  CancellableToken? _cancelToken;
  Timer? _computing;

  void _startCompute() {
    log('_startCompute called from ${StackTrace.current}');
    _cancel = false;
    _cancelToken = CancellableToken('Task was cancelled by the user');
    _digits = const <int>[];
    _computing = Timer.periodic(const Duration(milliseconds: 100), (timer) {
      setState(() {});
    });
    setState(() {});
  }

  void _stopCompute() {
    setState(() {
      _computing?.cancel();
      _computing = null;
    });
  }

  Future _loadNDigits(int start, int batch, Stream<int> digits) async {
    try {
      var i = start;
      await for (var d in digits) {
        _digits[i++] = d;
      }
      log('[_loadNDigits] computation for batch $start-${start + batch - 1} completed successfully');
    } on CancelledException catch (e) {
      log('[_loadNDigits] computation for batch $start-${start + batch - 1} cancelled: ${e.message}');
    } on WorkerException catch (e) {
      log('[_loadNDigits] computation for batch $start-${start + batch - 1} failed: ${e.message}');
    } catch (e) {
      log('[_loadNDigits] computation for batch $start-${start + batch - 1} failed: $e');
    }
  }

  void _loadDigitsWithoutWorkers() async {
    _startCompute();
    try {
      await Future.delayed(const Duration(seconds: 1));

      var sw = Stopwatch()..start();
      if (_cancel) {
        log('[_loadDigitsWithoutWorkers] computation has been cancelled');
      } else {
        _digits = Uint8List(widget._count);
        var piDigits = PiDigitsServiceImpl();
        try {
          await _loadNDigits(0, widget._count,
              piDigits.getNDigits(0, widget._count, _cancelToken));
          log('[_loadDigitsWithoutWorkers] computation completed');
        } on CancelledException {
          _cancel = true;
          log('[_loadDigitsWithoutWorkers] computation has been cancelled by user');
        }
      }
      sw.stop();

      log('[_loadDigitsWithoutWorkers] elapsed = ${sw.elapsed}');
    } catch (e, st) {
      log('[_loadDigitsWithWorkerPool] ERROR = $e');
      log('[_loadDigitsWithWorkerPool] TRACE = $st');
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
      await Future.delayed(const Duration(seconds: 1));

      var sw = Stopwatch()..start();
      if (_cancel) {
        log('[_loadDigitsWithWorkerPool] computation has been cancelled');
      } else {
        _digits = Uint8List(widget._count);
        final futures = <Future>[];
        var batch =
            widget._count ~/ widget._pool.concurrencySettings.maxWorkers;
        var start = 0;
        while (start < widget._count) {
          if (start + batch > widget._count) {
            batch = widget._count - start;
          }
          futures.add(_loadNDigits(start, batch,
              widget._pool.getNDigits(start, batch, _cancelToken)));
          start += batch;
        }
        log('[_loadDigitsWithWorkerPool] computation started with ${futures.length} batches');
        try {
          await Future.wait(futures);
          log('[_loadDigitsWithWorkerPool] computation completed');
        } on CancelledException {
          _cancel = true;
          log('[_loadDigitsWithWorkerPool] computation has been cancelled by user');
        }
      }

      sw.stop();
      log('[_loadDigitsWithWorkerPool] elapsed = ${sw.elapsed}');
    } catch (e, st) {
      log('[_loadDigitsWithWorkerPool] ERROR = $e');
      log('[_loadDigitsWithWorkerPool] TRACE = $st');
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

  String get _pi => _digits.isEmpty
      ? ''
      : [
          _digits[0].toRadixString(16),
          '.',
          ..._digits.skip(1).map((d) => d.toRadixString(16))
        ].join('');

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
        floatingActionButton: _computing != null
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
            : FutureBuilder<bool>(future: Future(() async {
                await widget._pool.start();
                return true;
              }), builder: (context, snapshot) {
                if (snapshot.hasData) {
                  return Row(
                      mainAxisAlignment: MainAxisAlignment.end,
                      children: [
                        FloatingActionButton(
                          onPressed: _loadDigitsWithoutWorkers,
                          tooltip: 'No Pool',
                          child: const Text('No Pool',
                              textAlign: TextAlign.center),
                        ),
                        FloatingActionButton(
                          onPressed: _loadDigitsWithWorkerPool,
                          tooltip: 'Pool',
                          child:
                              const Text('Pool', textAlign: TextAlign.center),
                        ),
                      ]);
                } else {
                  return const Text('initializing...',
                      style: TextStyle(
                          backgroundColor: Colors.blue, color: Colors.white));
                }
              }));
  }
}
