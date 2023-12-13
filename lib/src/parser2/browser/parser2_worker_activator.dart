import 'dart:convert';

import 'package:squadron/squadron.dart';

import '../parser2_service.dart';
import '../parser2_worker_pool.dart';

class WebParser2Worker extends Parser2Worker {
  WebParser2Worker(super.entryPoint, {super.args});

  @override
  Stream<List> parse(List lines, [CancellationToken? token]) =>
      stream(Parser2Service.parseCommand, args: lines, token: token).map(
          (list) =>
              jsonDecode(list)); // decode back to List when receiving results
}

Parser2Worker createWorker(int batchSize) =>
    WebParser2Worker('/workers/parser2_worker.dart.js', args: [batchSize]);
