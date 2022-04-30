import 'package:squadron/squadron.dart';

import 'parser_service.dart';

class ParserWorkerPool extends WorkerPool<ParserWorker>
    implements ParserService {
  ParserWorkerPool(dynamic entryPoint,
      {ConcurrencySettings? concurrencySettings})
      : super(entryPoint, concurrencySettings: concurrencySettings);

  @override
  Stream<List> streamParser(List lines, [CancellationToken? token]) =>
      stream((w) => w.streamParser(lines, token));

  @override
  Stream<List> streamParserOptimized(List lines, [CancellationToken? token]) =>
      stream((w) => w.streamParserOptimized(lines, token));
}

class ParserWorker extends Worker implements ParserService {
  ParserWorker(dynamic entryPoint, {String? id, List args = const []})
      : super(entryPoint, id: id, args: args);

  @override
  Stream<List> streamParser(List lines, [CancellationToken? token]) =>
      stream(ParserService.streamCommand, [lines], token);

  @override
  Stream<List> streamParserOptimized(List lines, [CancellationToken? token]) =>
      stream(ParserService.streamCommand, [lines], token, false, false);
}
