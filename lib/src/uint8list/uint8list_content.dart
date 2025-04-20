import 'dart:async';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import '../_helpers/page_content.dart';
import 'uint8list_service.dart';

class Uint8ListContent extends PageContent {
  Uint8ListContent() : super('SQUADRON SAMPLE - UINT8LIST');

  @override
  Widget body() => Text(_n?.toString() ?? '<no result yet>');

  Uint8List? _n;

  Future _exec(SquadronPlatformType mode) async {
    final worker = switch (mode) {
      SquadronPlatformType.js => Uint8ListServiceWorker.js(),
      SquadronPlatformType.wasm => Uint8ListServiceWorker.wasm(),
      SquadronPlatformType.unknown => Uint8ListService(),
      _ => Uint8ListServiceWorker(),
    };
    try {
      if (worker is IWorker) await (worker as IWorker).start();
      _n = await worker.pdf(_n ?? Uint8List.fromList([1, 2, 3, 5, 7]));
    } finally {
      if (worker is IWorker) (worker as IWorker).stop();
    }
    refresh();
  }

  Future _execWithPool(SquadronPlatformType mode) async {
    final pool = switch (mode) {
      SquadronPlatformType.js => Uint8ListServiceWorkerPool.js(),
      SquadronPlatformType.wasm => Uint8ListServiceWorkerPool.wasm(),
      _ => Uint8ListServiceWorkerPool(),
    };
    try {
      await pool.start();
      _n = await pool.pdf(_n ?? Uint8List.fromList([1, 2, 3, 5, 7]));
    } finally {
      pool.stop();
    }
    refresh();
  }

  @override
  List<Widget> actions() => [
        action(
            onPressed: () => _exec(SquadronPlatformType.unknown),
            label: 'No Worker'),
        action(onPressed: () => _exec(getMode()), label: 'Worker'),
        action(onPressed: () => _execWithPool(getMode()), label: 'Pool'),
      ];
}
