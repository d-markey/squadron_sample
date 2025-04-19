import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import '../_helpers/page_with_logger.dart';
import 'local_size_service.dart';
import 'text_size_service.dart';

class TextSizeContent extends PageContent {
  TextSizeContent() : super('SQUADRON SAMPLE - TEXT SIZE');

  String _result = '<no result yet>';

  final _localService = LocalSizeService();

  Future _getTextsSizes() async {
    final worker = switch (getMode()) {
      SquadronPlatformType.js => TextSizeServiceWorker.js(_localService),
      SquadronPlatformType.wasm => TextSizeServiceWorker.wasm(_localService),
      _ => TextSizeServiceWorker(_localService),
    };
    try {
      await worker.start();
      _result = await worker.doSomethingWithTexts(
          ['Text 1', 'Text 2', 'Longer Text #3', 'Multi\nLine Text']);
    } finally {
      worker.stop();
    }
    refresh();
  }

  @override
  Widget body() => Text(_result);

  @override
  List<Widget> actions() => [
        FloatingActionButton(
          onPressed: () => _getTextsSizes(),
          tooltip: 'Get sizes',
          child: const Text(
            'Get sizes',
            textAlign: TextAlign.center,
          ),
        ),
      ];
}
