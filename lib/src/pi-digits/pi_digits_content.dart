import 'dart:async';
import 'dart:typed_data';

import 'package:cancelation_token/cancelation_token.dart';
import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import '../_helpers/page_content.dart';
import '../logging_service.dart';
import 'pi_digits_service.dart';

class PiDigitsContent extends PageContent {
  PiDigitsContent() : super('SQUADRON SAMPLE - PI DIGITS');

  final _count = 5000;

  late final _digits = Uint8List(_count);
  bool _cancel = false;
  CancelableToken? _cancelToken;
  Timer? _computing;
  final _sw = Stopwatch();

  final _piDigitsService = PiDigitsService(mainLogger);

  @override
  void dispose() {
    _computing?.cancel();
    _computing = null;
    super.dispose();
  }

  Future<void> _startCompute() async {
    mainLogger.log('[$threadId] [M] start computing digits...');
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
    mainLogger.log('[$threadId] [M] digits computed in ${_sw.elapsed}.');
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
      mainLogger.log(
          '[$threadId] [M] computation for batch $start-${start + batch - 1} completed successfully');
    } on CanceledException catch (e) {
      mainLogger.log(
          '[$threadId] [M] computation for batch $start-${start + batch - 1} cancelled: ${e.message}');
    } on WorkerException catch (e) {
      mainLogger.log(
          '[$threadId] [M] computation for batch $start-${start + batch - 1} failed: ${e.message}');
    } catch (e) {
      mainLogger.log(
          '[$threadId] [M] computation for batch $start-${start + batch - 1} failed: $e');
    }
  }

  void _loadDigits(SquadronPlatformType mode) async {
    final concurrency =
        ConcurrencySettings(minWorkers: 6, maxWorkers: 6, maxParallel: 1);
    final pool = switch (mode) {
      SquadronPlatformType.js => PiDigitsServiceWorkerPool.js(mainLogger,
          concurrencySettings: concurrency),
      SquadronPlatformType.wasm => PiDigitsServiceWorkerPool.wasm(mainLogger,
          concurrencySettings: concurrency),
      SquadronPlatformType.unknown => _piDigitsService,
      _ =>
        PiDigitsServiceWorkerPool(mainLogger, concurrencySettings: concurrency),
    };
    if (pool is IWorker) await (pool as IWorker).start();
    await _startCompute();
    try {
      if (_cancel) {
        mainLogger.log('[$threadId] [M] computation has been cancelled');
      } else {
        _digits.fillRange(0, _digits.length, 0);
        final futures = <Future>[];
        final nb = (_count % concurrency.maxWorkers > 0)
            ? concurrency.maxWorkers + 1
            : concurrency.maxWorkers;
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
        mainLogger.log(
            '[$threadId] [M] computation started with ${futures.length} batches');
        try {
          await Future.wait(futures);
          mainLogger.log('[$threadId] [M] computation completed');
        } on CanceledException {
          _cancel = true;
          mainLogger
              .log('[$threadId] [M] computation has been cancelled by user');
        }
      }
    } catch (e, st) {
      mainLogger.log('[$threadId] [M] ERROR = $e');
      mainLogger.log('[$threadId] [M] TRACE = $st');
    } finally {
      await _stopCompute();
      if (pool is IWorker) (pool as IWorker).stop();
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
        children: [
          Text('First $_count hexadecimal digits of Pi:'),
          Text(_pi),
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
          action(
            onPressed: () => _loadDigits(SquadronPlatformType.unknown),
            label: 'Main Thread',
          ),
          action(
            onPressed: () => _loadDigits(getMode()),
            label: 'Worker Pool',
          ),
        ];
}
