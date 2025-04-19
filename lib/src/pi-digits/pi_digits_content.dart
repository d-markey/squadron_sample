import 'dart:async';
import 'dart:typed_data';

import 'package:cancelation_token/cancelation_token.dart';
import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';
import 'package:squadron_sample/src/_helpers/page_with_logger.dart';

import 'pi_digits_service.dart';

class PiDigitsContent extends PageContent {
  PiDigitsContent() : super('SQUADRON SAMPLE - PI DIGITS');

  final _count = 5000;

  late final _digits = Uint8List(_count);
  bool _cancel = false;
  CancelableToken? _cancelToken;
  Timer? _computing;
  final _sw = Stopwatch();

  final _piDigitsService = PiDigitsService();

  @override
  void dispose() {
    _computing?.cancel();
    _computing = null;
    super.dispose();
  }

  Future<void> _startCompute() async {
    log('start computing digits...');
    await Future.delayed(const Duration(seconds: 1));
    _cancel = false;
    _cancelToken = CancelableToken();
    _digits.fillRange(0, _digits.length, 0);
    _computing = Timer.periodic(const Duration(milliseconds: 100), (timer) {
      refresh();
    });
    _sw.stop();
    _sw.reset();
    _sw.start();
  }

  Future<void> _stopCompute() async {
    log('digits computed in ${_sw.elapsed}.');
    await Future.delayed(const Duration(seconds: 1));
    _computing?.cancel();
    _computing = null;
    refresh();
  }

  Future _loadNDigits(int start, int batch, Stream<int> digits) async {
    try {
      var i = start;
      await for (var d in digits) {
        _digits[i++] = d;
      }
      log('[_loadNDigits] computation for batch $start-${start + batch - 1} completed successfully');
    } on CanceledException catch (e) {
      log('[_loadNDigits] computation for batch $start-${start + batch - 1} cancelled: ${e.message}');
    } on WorkerException catch (e) {
      log('[_loadNDigits] computation for batch $start-${start + batch - 1} failed: ${e.message}');
    } catch (e) {
      log('[_loadNDigits] computation for batch $start-${start + batch - 1} failed: $e');
    }
  }

  void _loadDigitsWithoutWorkers() async {
    await _startCompute();
    try {
      if (_cancel) {
        log('[_loadDigitsWithoutWorkers] computation has been cancelled');
      } else {
        _digits.fillRange(0, _digits.length, 0);
        try {
          await _loadNDigits(
              0, _count, _piDigitsService.getNDigits(0, _count, _cancelToken));
          log('[_loadDigitsWithoutWorkers] computation completed');
        } on CanceledException {
          _cancel = true;
          log('[_loadDigitsWithoutWorkers] computation has been cancelled by user');
        }
      }
    } catch (e, st) {
      log('[_loadDigitsWithWorkerPool] ERROR = $e');
      log('[_loadDigitsWithWorkerPool] TRACE = $st');
    } finally {
      await _stopCompute();
    }
  }

  void _loadDigitsWithWorkerPool() async {
    final concurrency =
        ConcurrencySettings(minWorkers: 6, maxWorkers: 6, maxParallel: 1);
    final pool = switch (getMode()) {
      SquadronPlatformType.js =>
        PiDigitsServiceWorkerPool.js(concurrencySettings: concurrency),
      SquadronPlatformType.wasm =>
        PiDigitsServiceWorkerPool.wasm(concurrencySettings: concurrency),
      _ => PiDigitsServiceWorkerPool(concurrencySettings: concurrency),
    };
    await pool.start();
    await _startCompute();
    try {
      if (_cancel) {
        log('[_loadDigitsWithWorkerPool] computation has been cancelled');
      } else {
        _digits.fillRange(0, _digits.length, 0);
        final futures = <Future>[];
        final nb = (_count % pool.concurrencySettings.maxWorkers > 0)
            ? pool.concurrencySettings.maxWorkers + 1
            : pool.concurrencySettings.maxWorkers;
        var batch = _count ~/ nb;
        var start = 0;
        while (start < _count) {
          if (start + batch > _count) {
            batch = _count - start;
          }
          futures.add(_loadNDigits(
              start, batch, pool.getNDigits(start, batch, _cancelToken)));
          start += batch;
        }
        log('[_loadDigitsWithWorkerPool] computation started with ${futures.length} batches');
        try {
          await Future.wait(futures);
          log('[_loadDigitsWithWorkerPool] computation completed');
        } on CanceledException {
          _cancel = true;
          log('[_loadDigitsWithWorkerPool] computation has been cancelled by user');
        }
      }
    } catch (e, st) {
      log('[_loadDigitsWithWorkerPool] ERROR = $e');
      log('[_loadDigitsWithWorkerPool] TRACE = $st');
    } finally {
      await _stopCompute();
      pool.stop();
    }
  }

  void _cancelTasks() {
    _cancel = true;
    _cancelToken?.cancel();
  }

  static String _hex(int d) => d.toRadixString(16);

  String get _pi => '${_hex(_digits[0])}.${_digits.skip(1).map(_hex).join('')}';

  @override
  Widget body() => Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            'First $_count hexadecimal digits of Pi:',
          ),
          Expanded(child: SingleChildScrollView(child: Text(_pi))),
        ],
      );

  @override
  List<Widget> actions() => (_computing != null)
      ? [
          Text('tick = ${_computing?.tick}',
              style: const TextStyle(
                  backgroundColor: Colors.blue, color: Colors.white)),
          action(onPressed: _cancelTasks, label: 'Cancel')
        ]
      : [
          action(onPressed: _loadDigitsWithoutWorkers, label: 'Main Thread'),
          action(onPressed: _loadDigitsWithWorkerPool, label: 'Worker Pool'),
        ];
}
