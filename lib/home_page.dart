import 'dart:async';
import 'dart:developer';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:squadron/squadron_pool.dart';

import 'src/pi_digits_service.dart';
import 'src/pi_digits_service_worker.dart';
import 'src/pi_worker_pool.dart';

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);

  final _count = 5000;

  final WorkerPool<PiDigitsWorker> _pool = createPiWorkerPool(maxWorkers: 5);

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  _MyHomePageState();

  List<int> _digits = const <int>[];

  Timer? _computing;

  void _startCompute() {
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

  void _loadDigitsWithoutWorkers() async {
    _startCompute();

    _digits = const <int>[];

    await Future.delayed(const Duration(seconds: 1));

    _digits = Uint8List(widget._count);

    var sw = Stopwatch()..start();
    var piDigits = PiDigitsService();
    for (var i = 0; i < widget._count; i++) {
      var d = piDigits.getNth(i) as int;
      // log('received digit #$i = $d');
      _digits[i] = d;
    }
    log('[_loadDigitsWithoutWorkers] elapsed = ${sw.elapsed}');

    await Future.delayed(const Duration(seconds: 1));

    _stopCompute();
  }

  Future _loadNDigits(int start, int count) {
    final completer = Completer();
    var i = start;
    widget._pool.stream((w) => w.getNDigits(start, count)).listen((digit) {
      // log('received digit #$i = $digit');
      if (i < _digits.length) {
        _digits[i++] = digit;
      }
    }).onDone(() {
      completer.complete();
    });
    return completer.future;
  }

  void _loadDigitsWithWorkerPool() async {
    _startCompute();

    _digits = const <int>[];

    await Future.delayed(const Duration(seconds: 1));

    _digits = Uint8List(widget._count);

    var sw = Stopwatch()..start();
    final futures = <Future>[];
    var batch = widget._count ~/ widget._pool.maxWorkers;
    var start = 0;
    while (start < widget._count) {
      if (start + batch > widget._count) {
        batch = widget._count - start;
      }
      // log('loading batch $start -> ${start + batch}');
      futures.add(_loadNDigits(start, batch));
      start += batch;
    }
    await Future.wait(futures);
    log('[_loadDigitsWithWorkerPool] elapsed = ${sw.elapsed}');

    await Future.delayed(const Duration(seconds: 1));

    _stopCompute();
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
            ? Text('tick = ${_computing?.tick}',
                style: const TextStyle(
                    backgroundColor: Colors.blue, color: Colors.white))
            : FutureBuilder<bool>(
                future: widget._pool.start().then((result) => true),
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
