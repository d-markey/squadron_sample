import 'dart:async';

import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import '../vcd_generator.dart';
import 'parser_runner.dart';
import 'parser_service.dart';
import 'parser_worker_pool.dart';

class ParserPage extends StatefulWidget {
  ParserPage({Key? key, this.tabBar}) : super(key: key);

  final TabBar? tabBar;

  final TextEditingController _maxEntries =
      TextEditingController(text: '1000000');
  final TextEditingController _chunks = TextEditingController(text: '6');

  @override
  State<ParserPage> createState() => _ParserPageState();
}

class _ParserPageState extends State<ParserPage> {
  _ParserPageState();

  Timer? _parsing;

  ParserWorkerPool? _pool;

  @override
  void initState() {
    super.initState();
    _startPool();
  }

  @override
  void dispose() {
    _parsing?.cancel();
    _parsing = null;
    _pool?.stop();
    super.dispose();
  }

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
    final chunks = _chunks;
    if (_pool != null && _pool!.concurrencySettings.minWorkers != chunks) {
      _pool!.stop();
      _pool = null;
    }
    if (_pool == null) {
      _pool = ParserWorkerPool(
        concurrencySettings: ConcurrencySettings(
          minWorkers: chunks,
          maxWorkers: chunks,
          maxParallel: 1,
        ),
      );
      await _pool!.start();
    }
    return _pool!;
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
    // reset data
    _vcd = null;
  }

  Future _withoutPool([CancellationToken? token]) async {
    Squadron.info('****** PARSE - WITHOUT POOL ******');
    try {
      _start();
      final vcd = (_vcd ??= generateVCDData(_maxEntries).toList()).toList();
      await parse(
          ParseArguments(ParserService(), vcd, _chunks, token ?? _token));
    } finally {
      _done();
    }
  }

  Future _withCompute([CancellationToken? token]) async {
    Squadron.info('****** PARSE - WITHOUT POOL (compute) ******');
    try {
      _start();
      final vcd = (_vcd ??= generateVCDData(_maxEntries).toList()).toList();
      await compute(parse,
          ParseArguments(ParserService(), vcd, _chunks, token ?? _token));
    } finally {
      _done();
    }
  }

  Future _withPool([CancellationToken? token]) async {
    Squadron.info('****** PARSE - WITH POOL ******');
    try {
      _start();
      _startPool();
      final vcd = (_vcd ??= generateVCDData(_maxEntries).toList()).toList();
      await parse(ParseArguments(_pool!, vcd, _chunks, token ?? _token));
    } finally {
      _done();
    }
  }

  CancellationToken _createToken() {
    final token = CancellationToken();
    token.addListener(() {
      Squadron.info('Token cancelled');
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
          title: const Text('SQUADRON SAMPLE - PARSER (LIST)'),
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
                  onChanged: (_) {
                    _vcd = null;
                  },
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
              ]));
  }
}
