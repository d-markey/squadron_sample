import 'dart:async';

import 'package:cancelation_token/cancelation_token.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';
import 'package:squadron_sample/src/_helpers/page_with_logger.dart';

import '../../root_logger.dart';
import '../vcd_generator.dart';
import 'parser2_runner.dart';
import 'parser2_service.dart';

class Parser2Content extends PageContent {
  Parser2Content() : super('SQUADRON SAMPLE - PARSER (STREAM)');

  final TextEditingController _maxEntries =
      TextEditingController(text: '1000000');
  final TextEditingController _chunks = TextEditingController(text: '2');
  final TextEditingController _batchSize = TextEditingController(text: '250');

  int get maxEntries => int.parse(_maxEntries.text);
  int get chunks => int.parse(_chunks.text);
  int get batchSize => int.parse(_batchSize.text);

  Timer? _parsing;

  @override
  void dispose() {
    _parsing?.cancel();
    _parsing = null;
    super.dispose();
  }

  void _start() {
    _parsing = Timer.periodic(const Duration(milliseconds: 100), (timer) {
      refresh();
    });
    refresh();
  }

  void _done() {
    _parsing?.cancel();
    _parsing = null;
    refresh();
  }

  late CancelableToken _token = _createToken();

  Future<Parser2ServiceWorkerPool> _startPool() async {
    final concurrency = ConcurrencySettings(
      minWorkers: chunks,
      maxWorkers: chunks,
      maxParallel: 1,
    );
    final pool = switch (getMode()) {
      SquadronPlatformType.js => Parser2ServiceWorkerPool.js(batchSize,
          concurrencySettings: concurrency),
      SquadronPlatformType.wasm => Parser2ServiceWorkerPool.wasm(batchSize,
          concurrencySettings: concurrency),
      _ => Parser2ServiceWorkerPool(batchSize, concurrencySettings: concurrency)
    };
    await pool.start();
    return pool;
  }

  List<String>? _vcd;

  Future _all() async {
    final token = _token;
    // same data for all tests
    _vcd = generateVCDData(maxEntries).toList();
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
      final vcd = (_vcd ??= generateVCDData(maxEntries).toList()).toList();
      await parse(ParseArguments(Parser2Service(maxEntries), vcd, 1,
          token ?? _token)); // force 1 stream and 1 batch
    } finally {
      _done();
    }
  }

  Future _withCompute([CancelationToken? token]) async {
    rootLogger.i('****** PARSE - WITHOUT POOL (compute) ******');
    try {
      _start();
      final vcd = (_vcd ??= generateVCDData(maxEntries).toList()).toList();
      await compute(
          parse,
          ParseArguments(
              Parser2Service(batchSize), vcd, chunks, token ?? _token));
    } finally {
      _done();
    }
  }

  Future _withPool([CancelationToken? token]) async {
    rootLogger.i('****** PARSE - WITH POOL ******');
    final pool = await _startPool();
    try {
      _start();
      final vcd = (_vcd ??= generateVCDData(maxEntries).toList()).toList();
      await parse(ParseArguments(pool, vcd, chunks, token ?? _token));
    } finally {
      pool.stop();
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
  Widget body() => Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Row(mainAxisAlignment: MainAxisAlignment.spaceAround, children: [
            const Flexible(
                child: Text(
              'MaxEntries:',
            )),
            Flexible(
                child: TextField(
              controller: _maxEntries,
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
              controller: _chunks,
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
              controller: _batchSize,
              keyboardType: TextInputType.number,
            ))
          ]),
        ],
      );

  @override
  List<Widget> actions() => _parsing != null
      ? [
          Text('tick = ${_parsing?.tick}',
              style: const TextStyle(
                  backgroundColor: Colors.blue, color: Colors.white)),
          action(onPressed: _cancel, label: 'Cancel'),
        ]
      : [
          action(onPressed: _all, label: 'ALL'),
          action(onPressed: _withoutPool, label: 'No Pool'),
          action(onPressed: _withCompute, label: 'Compute'),
          action(onPressed: _withPool, label: 'Pool'),
        ];
}
