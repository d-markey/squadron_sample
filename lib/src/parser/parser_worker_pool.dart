import 'package:squadron/squadron.dart';

import 'parser_activator.dart'
    if (dart.library.js) 'package:squadron_sample/src/parser/browser/parser_worker_activator.dart'
    if (dart.library.html) 'package:squadron_sample/src/parser/browser/parser_worker_activator.dart'
    if (dart.library.io) 'package:squadron_sample/src/parser/vm/parser_worker_activator.dart';

import 'parser_service.dart';

class ParserWorkerPool extends WorkerPool<ParserWorker>
    implements ParserService {
  ParserWorkerPool({ConcurrencySettings? concurrencySettings})
      : super(createWorker, concurrencySettings: concurrencySettings);

  @override
  Future<List> parse(List lines, [CancellationToken? token]) =>
      execute((w) => w.parse(lines, token));
}

class ParserWorker extends Worker implements ParserService {
  ParserWorker(dynamic entryPoint, {List args = const []})
      : super(entryPoint, args: args);

  @override
  Future<List> parse(List lines, [CancellationToken? token]) =>
      send(ParserService.parseCommand, args: lines, token: token);
}
