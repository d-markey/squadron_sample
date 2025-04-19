import 'dart:async';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';
import 'package:squadron_sample/src/_helpers/page_with_logger.dart';

import 'codegen.dart';

class CodeGenContent extends PageContent {
  CodeGenContent() : super('SQUADRON SAMPLE - CODE GEN');

  @override
  Widget body() => Text(_n?.toString() ?? '<no result yet>');

  Uint8List? _n;

  final _service = CodeGen();

  Future _execWithService() async {
    _n = await _service.pdf(_n ?? Uint8List.fromList([1, 2, 3, 5, 7]));
    refresh();
  }

  Future _execWithWorker() async {
    final worker = switch (getMode()) {
      SquadronPlatformType.js => CodeGenWorker.js(),
      SquadronPlatformType.wasm => CodeGenWorker.wasm(),
      _ => CodeGenWorker(),
    };
    try {
      await worker.start();
      _n = await worker.pdf(_n ?? Uint8List.fromList([1, 2, 3, 5, 7]));
    } finally {
      worker.stop();
    }
    refresh();
  }

  Future _execWithWorkerPool() async {
    final pool = switch (getMode()) {
      SquadronPlatformType.js => CodeGenWorkerPool.js(),
      SquadronPlatformType.wasm => CodeGenWorkerPool.wasm(),
      _ => CodeGenWorkerPool(),
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
        action(onPressed: _execWithService, label: 'No Worker'),
        action(onPressed: _execWithWorker, label: 'Worker'),
        action(onPressed: _execWithWorkerPool, label: 'Pool'),
      ];
}
