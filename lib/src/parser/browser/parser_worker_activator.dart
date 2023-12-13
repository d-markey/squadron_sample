import 'dart:convert';

import 'package:squadron/squadron.dart';

import '../parser_service.dart';
import '../parser_worker_pool.dart';

class WebParserWorker extends ParserWorker {
  WebParserWorker(super.entryPoint, {super.args});

  @override
  Future<List> parse(List lines, [CancellationToken? token]) async =>
      jsonDecode(await send(ParserService.parseCommand,
          args: lines,
          token: token)); // decode back to List when receiving results
}

ParserWorker createWorker() =>
    WebParserWorker('/workers/parser_worker.dart.js');
