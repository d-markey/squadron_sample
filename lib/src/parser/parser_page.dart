import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import 'parser_runner.dart';
import 'parser_worker_activator.dart'
    if (dart.library.js) 'package:squadron_sample/src/parser/browser/parser_worker_activator.dart'
    if (dart.library.html) 'package:squadron_sample/src/parser/browser/parser_worker_activator.dart'
    if (dart.library.io) 'package:squadron_sample/src/parser/vm/parser_worker_activator.dart';

import 'vcd_generator.dart';
import 'parser_service.dart';
import 'parser_worker_pool.dart';

class ParserPage extends StatefulWidget {
  const ParserPage({Key? key, this.tabBar}) : super(key: key);

  final TabBar? tabBar;

  @override
  State<ParserPage> createState() => _ParserPageState();
}

class _ParserPageState extends State<ParserPage> {
  _ParserPageState();

  Timer? _parsing;

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

  final _maxEntries = 500000;

  final _chunks = 6;

  Future<ParserWorkerPool> _startPool() async {
    final pool = ParserWorkerPool(
      createWorker,
      concurrencySettings: ConcurrencySettings(
        minWorkers: 1,
        maxWorkers: _chunks,
        maxParallel: 1,
      ),
    );
    await pool.start();
    return pool;
  }

  List<String>? _vcd;

  Future _all() async {
    // same data for all tests
    _vcd = generateVCDData(_maxEntries).toList();
    await _withoutPool();
    await _withCompute();
    await _withPool();
    // reset data
    _vcd = null;
  }

  Future _withoutPool() async {
    log?.call('****** WITHOUT POOL ******');
    try {
      _start();
      _vcd ??= generateVCDData(_maxEntries).toList();
      await parse(ParseArguments(ParserService(), _vcd!.toList(), 1));
    } finally {
      _done();
    }
  }

  Future _withCompute() async {
    log?.call('****** WITHOUT POOL (compute) ******');
    try {
      _start();
      _vcd ??= generateVCDData(_maxEntries).toList();
      await compute(
          parse, ParseArguments(ParserService(), _vcd!.toList(), 1));
    } finally {
      _done();
    }
  }

  Future _withPool() async {
    log?.call('****** WITH POOL ******');
    ParserWorkerPool? pool;
    try {
      _start();
      pool = await _startPool();
      _vcd ??= generateVCDData(_maxEntries).toList();
      await parse(ParseArguments(pool, _vcd!.toList(), _chunks));
    } finally {
      _done();
      final stats = pool?.fullStats.toList() ?? [];
      for (var i = 0; i < stats.length; i++) {
        final stat = stats[i];
        log?.call(
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
                  onPressed: _all,
                  tooltip: 'ALL',
                  child: const Text('ALL', textAlign: TextAlign.center),
                ),
                FloatingActionButton(
                  onPressed: _withoutPool,
                  tooltip: 'No Pool',
                  child: const Text('No Pool', textAlign: TextAlign.center),
                ),
                FloatingActionButton(
                  onPressed: _withCompute,
                  tooltip: 'Compute',
                  child: const Text('Compute', textAlign: TextAlign.center),
                ),
                FloatingActionButton(
                  onPressed: _withPool,
                  tooltip: 'Pool',
                  child: const Text('Pool', textAlign: TextAlign.center),
                ),
              ]));
  }
}
