import 'dart:async';
import 'dart:developer';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import 'src/pi_digits_service.dart';
import 'src/pi_digits_worker_pool.dart';

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);

  final _count = 5000;

  final PiDigitsWorkerPool _pool = PiDigitsWorkerPool(const ConcurrencySettings(maxWorkers: 7));

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  _MyHomePageState();

  List<int> _digits = const <int>[];
  bool _cancel = false;
  Timer? _computing;

  void _startCompute() {
    _cancel = false;
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
      log('[_loadNDigits] computation for batch $start-${start+batch-1} completed successfully');
    } on WorkerException catch (e) {
      log('[_loadNDigits] computation for batch $start-${start+batch-1} failed: ${e.message}');
    } catch (e) {
      log('[_loadNDigits] computation for batch $start-${start+batch-1} failed: $e');
    }
  }

  void _loadDigitsWithoutWorkers() async {
    _startCompute();

    await Future.delayed(const Duration(seconds: 1));

    var sw = Stopwatch()..start();
    if (_cancel) {
      log('[_loadDigitsWithoutWorkers] computation has been cancelled');
    } else {
      _digits = Uint8List(widget._count);
      var piDigits = PiDigitsServiceImpl();
      await _loadNDigits(0, widget._count, piDigits.getNDigits(0, widget._count));
    }
    sw.stop();

    log('[_loadDigitsWithoutWorkers] elapsed = ${sw.elapsed}');

    if (!_cancel) {
      await Future.delayed(const Duration(seconds: 1));
    }

    _stopCompute();
  }

  void _loadDigitsWithWorkerPool() async {
    _startCompute();

    await Future.delayed(const Duration(seconds: 1));

    var sw = Stopwatch()..start();
    if (_cancel) {
      log('[_loadDigitsWithWorkerPool] computation has been cancelled');
    } else {
      _digits = Uint8List(widget._count);
      final futures = <Future>[];
      var batch = widget._count ~/ widget._pool.concurrencySettings.maxWorkers;
      var start = 0;
      while (start < widget._count) {
        if (start + batch > widget._count) {
          batch = widget._count - start;
        }
        futures.add(_loadNDigits(start, batch, widget._pool.getNDigits(start, batch)));
        start += batch;
      }
      await Future.wait(futures);
    }

    sw.stop();
    log('[_loadDigitsWithWorkerPool] elapsed = ${sw.elapsed}');

    if (!_cancel) {
      await Future.delayed(const Duration(seconds: 1));
    }

    _stopCompute();
  }

  void _cancelPoolTasks() {
    _cancel = true;
    widget._pool.cancel();
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
          title: Text(widget.title),
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
            ? Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  Text('tick = ${_computing?.tick}',
                    style: const TextStyle(
                        backgroundColor: Colors.blue, color: Colors.white)),
                  FloatingActionButton(
                    onPressed: _cancelPoolTasks,
                    tooltip: 'Cancel',
                    child:
                        const Text('Cancel', textAlign: TextAlign.center),
                  )
                ]
              )
            : FutureBuilder<bool>(
                future: Future(() async {
                  await widget._pool.start();
                  return true;
                }),
                builder: (context, snapshot) {
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
