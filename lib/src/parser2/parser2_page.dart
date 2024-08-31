import 'dart:async';

import 'package:cancelation_token/cancelation_token.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import '../../root_logger.dart';
import '../vcd_generator.dart';
import 'parser2_runner.dart';
import 'parser2_service.dart';
import 'parser2_worker_pool.dart';

class Parser2Page extends StatefulWidget {
  Parser2Page({super.key, this.tabBar});

  final TabBar? tabBar;

  final TextEditingController _maxEntries =
      TextEditingController(text: '1000000');
  final TextEditingController _chunks = TextEditingController(text: '2');
  final TextEditingController _batchSize = TextEditingController(text: '250');

  @override
  State<Parser2Page> createState() => _Parser2PageState();
}

class _Parser2PageState extends State<Parser2Page> {
  _Parser2PageState();

  Timer? _parsing;

  Parser2WorkerPool? _pool;

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

  int get _batchSize => int.parse(widget._batchSize.text);

  late CancelableToken _token = _createToken();

  Future<Parser2WorkerPool> _startPool() async {
    final chunks = _chunks;
    if (_pool != null && _pool!.concurrencySettings.minWorkers != chunks) {
      _pool!.stop();
      _pool = null;
    }
    if (_pool == null) {
      _pool = Parser2WorkerPool(
        batchSize: _batchSize,
        concurrencySettings: ConcurrencySettings(
          minWorkers: chunks,
          maxWorkers: chunks,
          maxParallel: 1,
        ),
      );
      _pool!.start();
    }
    return _pool!;
  }

  List<String>? _vcd;

  Future _all() async {
    final token = _token;
    // same data for all tests
    _vcd = generateVCDData(_maxEntries).toList();
    if (token.isCanceled) return;
    await _withoutPool(token);
    if (token.isCanceled) return;
    await _withCompute(token);
    if (token.isCanceled) return;
    await _withPool(token);
    if (token.isCanceled) return;
    // reset data
    _vcd = null;
  }

  Future _withoutPool([CancelationToken? token]) async {
    rootLogger.i('****** PARSE - WITHOUT POOL ******');
    try {
      _start();
      final vcd = (_vcd ??= generateVCDData(_maxEntries).toList()).toList();
      await parse(ParseArguments(Parser2Service(_maxEntries), vcd, 1,
          token ?? _token)); // force 1 stream and 1 batch
    } finally {
      _done();
    }
  }

  Future _withCompute([CancelationToken? token]) async {
    rootLogger.i('****** PARSE - WITHOUT POOL (compute) ******');
    try {
      _start();
      final vcd = (_vcd ??= generateVCDData(_maxEntries).toList()).toList();
      await compute(
          parse,
          ParseArguments(
              Parser2Service(_batchSize), vcd, _chunks, token ?? _token));
    } finally {
      _done();
    }
  }

  Future _withPool([CancelationToken? token]) async {
    rootLogger.i('****** PARSE - WITH POOL ******');
    try {
      _start();
      _startPool();
      final vcd = (_vcd ??= generateVCDData(_maxEntries).toList()).toList();
      await parse(ParseArguments(_pool!, vcd, _chunks, token ?? _token));
    } finally {
      _done();
    }
  }

  CancelableToken _createToken() {
    final token = CancelableToken();
    token.onCanceled.then((_) => rootLogger.i('Token cancelled'));
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
          title: const Text('SQUADRON SAMPLE - PARSER (STREAM)'),
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
              Row(mainAxisAlignment: MainAxisAlignment.spaceAround, children: [
                const Flexible(
                    child: Text(
                  'Batch size:  ',
                )),
                Flexible(
                    child: TextField(
                  controller: widget._batchSize,
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
