import 'dart:async';

import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import 'parser_service.dart';
import 'parser_worker_activator.dart'
    if (dart.library.js) 'package:squadron_sample/src/parser/browser/parser_worker_activator.dart'
    if (dart.library.html) 'package:squadron_sample/src/parser/browser/parser_worker_activator.dart'
    if (dart.library.io) 'package:squadron_sample/src/parser/vm/parser_worker_activator.dart';

import 'parser_worker_pool.dart';
import 'signal_value.dart';
import 'vcd_generator.dart';

class ParserPage extends StatefulWidget {
  const ParserPage({Key? key, this.tabBar}) : super(key: key);

  final TabBar? tabBar;

  @override
  State<ParserPage> createState() => _ParserPageState();
}

class _ParserPageState extends State<ParserPage> {
  _ParserPageState();

  Timer? _parsing;
  final _sw = Stopwatch()..start();

  void _start() {
    _parsing = Timer.periodic(const Duration(milliseconds: 100), (timer) {
      setState(() {});
    });
    setState(() {});
  }

  void _done() {
    setState(() {
      _parsing?.cancel();
      _parsing = null;
    });
  }

  final _oneSec = const Duration(seconds: 1);

  List<T> Function(List<T> previous, List element) _flatten<T>(String name,
      {T Function(dynamic entry)? converter}) {
    return (previous, element) {
      if (previous.isEmpty) {
        print('[${_sw.elapsed}]    start folding $name');
      }
      final mapper = converter ?? (data) => data;
      previous.addAll(element.map(mapper));
      return previous;
    };
  }

  Future<List> _run(
      ParserService parser, int maxEntries, int nbOfChunks) async {
    _start();

    await Future.delayed(_oneSec);

    final contents = generateVCDData(maxEntries).toList();

    _sw.reset();

    print(
        '[${_sw.elapsed}] START SPLITTING CONTENT: lines = ${contents.length}');

    final linesPerBatch = contents.length ~/ nbOfChunks;
    final chunks = <List>[];
    while (contents.length > linesPerBatch) {
      final part = contents.sublist(0, linesPerBatch);
      // avoid keeping duplicate stuff in memory so it can be garbage collected
      contents.removeRange(0, linesPerBatch);
      while (contents.isNotEmpty && !contents[0].startsWith('#')) {
        part.add(contents.removeAt(0));
      }
      chunks.add(part);
    }
    if (contents.isNotEmpty) {
      chunks.add(contents);
    }

    print(
        '[${_sw.elapsed}] DONE SPLITTING CONTENT: chunk lengths = ${chunks.map((p) => p.length).join(', ')}');

    await Future.delayed(_oneSec);

    _sw.reset();

    print('[${_sw.elapsed}] START PARSING');

    var futures = <Future<List<SignalValue>>>[];
    for (var i = 0; i < chunks.length; i++) {
      // streamParser() returns partial results so we use fold() to produce a single list
      // the items returned by streamParser() are 'raw' Map objects so we also convert these maps into SignalValues
      final future = parser.streamParser(chunks[i]).fold<List<SignalValue>>(
        <SignalValue>[],
        _flatten<SignalValue>(
          'chunk #$i (${chunks[i].length} lines)',
          converter: (data) => SignalValue.load(data),
        ),
      ).whenComplete(() => print('[${_sw.elapsed}]    done folding chunk #$i'));
      futures.add(future);
    }

    if (parser is WorkerPool) {
      final concurrency = (parser as WorkerPool).concurrencySettings;
      print(
          '[${_sw.elapsed}] STARTED ${futures.length} STREAMS WITH A POOL OF ${concurrency.minWorkers}-${concurrency.maxWorkers} WORKERS');
    } else {
      print('[${_sw.elapsed}] STARTED ${futures.length} STREAMS WITH NO POOL');
    }

    print('[${_sw.elapsed}] WAITING FOR RESULTS');

    // each future will produce a partial List<SignalValue>
    // flatten these results to finally get a consolidated List<SignalValue>
    final list = (await Future.wait(futures)).fold(
      <SignalValue>[],
      _flatten<SignalValue>('consolidated list'),
    ).toList();

    print('[${_sw.elapsed}] DONE PARSING: total items = ${list.length}');
    print('[${_sw.elapsed}]    first: ${list.first}');
    print('[${_sw.elapsed}]    last: ${list.last}');

    await Future.delayed(_oneSec);

    _done();

    return list;
  }

  final _maxEntries = 100000;
  final _chunks = 3; // 8 CPU --> 1 UI + 7 Workers

  void _withoutPool() async {
    print('****** WITHOUT POOL ******');
    await _run(ParserService(), _maxEntries, 1);
  }

  void _withPool() async {
    print('****** WITH POOL ******');
    ParserWorkerPool? pool;
    try {
      pool = ParserWorkerPool(
        createWorker,
        concurrencySettings: ConcurrencySettings(
          minWorkers: 1,
          maxWorkers: _chunks,
          maxParallel: 1,
        ),
      );
      await pool.start();

      await _run(pool, _maxEntries, _chunks);
    } finally {
      final stats = pool?.fullStats.toList() ?? [];
      for (var i = 0; i < stats.length; i++) {
        final stat = stats[i];
        print(
            '* #$i ${stat.status} current=${stat.workload} / total=${stat.totalWorkload} max=${stat.maxWorkload} errors=${stat.totalErrors}');
      }
      pool?.stop();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('SQUADRON SAMPLE - PARSER'),
          bottom: widget.tabBar,
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: const [
              Text(
                'Parser test',
              ),
            ],
          ),
        ),
        floatingActionButton: _parsing != null
            ? Row(mainAxisAlignment: MainAxisAlignment.end, children: [
                Text('tick = ${_parsing?.tick}',
                    style: const TextStyle(
                        backgroundColor: Colors.blue, color: Colors.white)),
              ])
            : Row(mainAxisAlignment: MainAxisAlignment.end, children: [
                FloatingActionButton(
                  onPressed: _withoutPool,
                  tooltip: 'No Pool',
                  child: const Text('No Pool', textAlign: TextAlign.center),
                ),
                FloatingActionButton(
                  onPressed: _withPool,
                  tooltip: 'Pool',
                  child: const Text('Pool', textAlign: TextAlign.center),
                ),
              ]));
  }
}
