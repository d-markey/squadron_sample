import 'dart:convert';

import 'package:squadron/squadron_service.dart';

import '../parser_service.dart';
import '../parser_worker_pool.dart';

class WebParserWorker extends ParserWorker {
  WebParserWorker(dynamic entryPoint, {List args = const []})
      : super(entryPoint, args: args);

  @override
  Future<List> parse(List lines, [CancellationToken? token]) async =>
      jsonDecode(await send(ParserService.parseCommand, lines, token, false,
          false)); // decode back to List when receiving results
}

ParserWorker createWorker() =>
    WebParserWorker('/workers/parser_worker.dart.js');
