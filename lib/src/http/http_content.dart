import 'dart:async';

import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import '../_helpers/page_content.dart';
import '../logging_service.dart';
import 'http_service.dart';

class HttpContent extends PageContent {
  HttpContent() : super('SQUADRON SAMPLE - HTTP');

  String? _result;

  Future _exec(SquadronPlatformType mode) async {
    final worker = switch (mode) {
      SquadronPlatformType.js => HttpServiceWorker.js(mainLogger),
      SquadronPlatformType.wasm => HttpServiceWorker.wasm(mainLogger),
      SquadronPlatformType.unknown => HttpService(mainLogger),
      _ => HttpServiceWorker(mainLogger),
    };
    if (worker is IWorker) {
      await (worker as IWorker).start();
    }
    final sw = Stopwatch()..start();
    try {
      mainLogger.log('[$threadId] [M] [${sw.elapsedMilliseconds} ms] Load...');
      _result = await worker
          .get('https://official-joke-api.appspot.com/random_joke/');
      mainLogger.log('[$threadId] [M] [${sw.elapsedMilliseconds} ms] Done.');
    } finally {
      if (worker is IWorker) {
        await (worker as IWorker).start();
      }
    }
    refresh();
  }

  @override
  Widget body() => Text(_result?.toString() ?? '<no result yet>');

  @override
  List<Widget> actions() => [
        action(onPressed: () => _exec(getMode()), label: 'GET'),
      ];
}
