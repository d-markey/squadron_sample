import 'dart:async';

import 'package:cancelation_token/cancelation_token.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import '../../root_logger.dart';
import '../vcd_generator.dart';
import 'parser3_runner.dart';
import 'parser3_service.dart';

class Parser3Page extends StatefulWidget {
  Parser3Page({super.key, this.tabBar});

  final TabBar? tabBar;

  final TextEditingController _maxEntries =
      TextEditingController(text: '1000000');

  final TextEditingController _maxDelayInMs =
      TextEditingController(text: '100');

  @override
  State<Parser3Page> createState() => _Parser3PageState();
}

class _Parser3PageState extends State<Parser3Page> {
  _Parser3PageState();

  Timer? _parsing;

  @override
  void dispose() {
    _parsing?.cancel();
    _parsing = null;
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

  int get _maxDelayInMs => int.parse(widget._maxDelayInMs.text);

  late CancelableToken _token = _createToken();

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
    // reset data
    _vcd = null;
  }

  Future _withoutPool([CancelationToken? token]) async {
    rootLogger.i('****** PARSE - WITHOUT POOL ******');
    try {
      _start();
      final vcd = (_vcd ??= generateVCDData(_maxEntries).toList()).toList();
      await parse(
          ParseArguments(Parser3Service(_maxDelayInMs), vcd, token ?? _token));
    } finally {
      _done();
    }
  }

  Future _withCompute([CancelationToken? token]) async {
    rootLogger.i('****** PARSE - WITHOUT POOL (compute) ******');
    try {
      _start();
      final vcd = (_vcd ??= generateVCDData(_maxEntries).toList()).toList();
      await compute(parse,
          ParseArguments(Parser3Service(_maxDelayInMs), vcd, token ?? _token));
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
                  'Max delay (ms): ',
                )),
                Flexible(
                    child: TextField(
                  controller: widget._maxDelayInMs,
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
              ]));
  }
}
