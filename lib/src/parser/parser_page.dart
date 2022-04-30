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
  ParserPage({Key? key, this.tabBar}) : super(key: key);

  final TabBar? tabBar;

  final TextEditingController _chunks = TextEditingController(text: '6');
  final TextEditingController _maxEntries =
      TextEditingController(text: '100000');

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

  int get _maxEntries => int.parse(widget._maxEntries.text);

  int get _chunks => int.parse(widget._chunks.text);

  late CancellationToken _token = _createToken();

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
    final token = _token;
    // same data for all tests
    _vcd = generateVCDData(_maxEntries).toList();
    if (token.cancelled) return;
    await _withoutPool(token);
    if (token.cancelled) return;
    await _withCompute(token);
    if (token.cancelled) return;
    await _withPool(token);
    if (token.cancelled) return;
    await _withPoolOptimized(token);
    if (token.cancelled) return;
    // reset data
    _vcd = null;
  }

  Future _withoutPool([CancellationToken? token]) async {
    log?.call('****** WITHOUT POOL ******');
    try {
      _start();
      _vcd ??= generateVCDData(_maxEntries).toList();
      await parse(ParseArguments(
          ParserService(), _vcd!.toList(), _chunks, token ?? _token, false));
    } finally {
      _done();
    }
  }

  Future _withCompute([CancellationToken? token]) async {
    log?.call('****** WITHOUT POOL (compute) ******');
    try {
      _start();
      _vcd ??= generateVCDData(_maxEntries).toList();
      await compute(
          parse,
          ParseArguments(ParserService(), _vcd!.toList(), _chunks,
              token ?? _token, false));
    } finally {
      _done();
    }
  }

  Future _withPool([CancellationToken? token]) async {
    log?.call('****** WITH POOL ******');
    ParserWorkerPool? pool;
    try {
      _start();
      pool = await _startPool();
      _vcd ??= generateVCDData(_maxEntries).toList();
      await parse(ParseArguments(
          pool, _vcd!.toList(), _chunks, token ?? _token, false));
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

  Future _withPoolOptimized([CancellationToken? token]) async {
    log?.call('****** WITH POOL (optimized) ******');
    ParserWorkerPool? pool;
    try {
      _start();
      pool = await _startPool();
      _vcd ??= generateVCDData(_maxEntries).toList();
      await parse(
          ParseArguments(pool, _vcd!.toList(), _chunks, token ?? _token, true));
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

  CancellationToken _createToken() {
    final token = CancellationToken();
    token.addListener(() {
      print('Token cancelled');
    });
    return token;
  }

  void _cancel() {
    _token.cancel();
    _token = _createToken();
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
            children: [
              Row(mainAxisAlignment: MainAxisAlignment.spaceAround, children: [
                const Flexible(
                    child: Text(
                  'MaxEntries:',
                )),
                Flexible(
                    child: TextField(
                  controller: widget._maxEntries,
                  keyboardType: TextInputType.number,
                ))
              ]),
              Row(mainAxisAlignment: MainAxisAlignment.spaceAround, children: [
                const Flexible(
                    child: Text(
                  'Chunks:      ',
                )),
                Flexible(
                    child: TextField(
                  controller: widget._chunks,
                  keyboardType: TextInputType.number,
                ))
              ]),
            ],
          ),
        ),
        floatingActionButton: _parsing != null
            ? Row(mainAxisAlignment: MainAxisAlignment.end, children: [
                Text('tick = ${_parsing?.tick}',
                    style: const TextStyle(
                        backgroundColor: Colors.blue, color: Colors.white)),
                FloatingActionButton(
                  onPressed: _cancel,
                  tooltip: 'Cancel',
                  child: const Text('Cancel', textAlign: TextAlign.center),
                ),
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
                FloatingActionButton(
                  onPressed: _withPoolOptimized,
                  tooltip: 'Pool (opt)',
                  child: const Text('Pool (opt)', textAlign: TextAlign.center),
                ),
              ]));
  }
}
