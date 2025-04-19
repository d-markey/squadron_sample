import 'dart:async';

import 'package:cancelation_token/cancelation_token.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import '../_helpers/page_with_logger.dart';
import '../vcd_generator.dart';
import 'parser_runner.dart';
import 'parser_service.dart';

class ParserContent extends PageContent {
  ParserContent() : super('SQUADRON SAMPLE - PARSER (LIST)') {
    _startPool();
  }

  final TextEditingController _maxEntries =
      TextEditingController(text: '1000000');
  final TextEditingController _chunks = TextEditingController(text: '6');

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

  Future<ParserServiceWorkerPool> _startPool() async {
    final chunks = int.parse(_chunks.text);
    final concurrency = ConcurrencySettings(
        minWorkers: chunks, maxWorkers: chunks, maxParallel: 1);

    final pool = switch (getMode()) {
      SquadronPlatformType.js =>
        ParserServiceWorkerPool.js(concurrencySettings: concurrency),
      SquadronPlatformType.wasm =>
        ParserServiceWorkerPool.wasm(concurrencySettings: concurrency),
      _ => ParserServiceWorkerPool(concurrencySettings: concurrency)
    };
    await pool.start();

    return pool;
  }

  List<String>? _vcd;

  Future _all() async {
    final token = _token;
    // same data for all tests
    _vcd = generateVCDData(int.parse(_maxEntries.text)).toList();
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
    log('****** PARSE - WITHOUT POOL ******');
    try {
      _start();
      final vcd = (_vcd ??=
              generateVCDData(int.parse(_maxEntries.text)).toList())
          .toList();
      await parse(ParseArguments(
          ParserService(), vcd, int.parse(_chunks.text), token ?? _token));
    } finally {
      _done();
    }
  }

  Future _withCompute([CancelationToken? token]) async {
    log('****** PARSE - WITHOUT POOL (compute) ******');
    try {
      _start();
      final vcd = (_vcd ??=
              generateVCDData(int.parse(_maxEntries.text)).toList())
          .toList();
      await compute(
          parse,
          ParseArguments(
              ParserService(), vcd, int.parse(_chunks.text), token ?? _token));
    } finally {
      _done();
    }
  }

  Future _withPool([CancelationToken? token]) async {
    log('****** PARSE - WITH POOL ******');
    final pool = await _startPool();
    try {
      _start();
      final vcd = (_vcd ??=
              generateVCDData(int.parse(_maxEntries.text)).toList())
          .toList();
      await parse(
          ParseArguments(pool, vcd, int.parse(_chunks.text), token ?? _token));
    } finally {
      _done();
      pool.stop();
    }
  }

  CancelableToken _createToken() {
    final token = CancelableToken();
    token.onCanceled.then((_) => log('Token cancelled'));
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
        ],
      );

  @override
  List<Widget> actions() => (_parsing != null)
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
