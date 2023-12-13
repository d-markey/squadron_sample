import 'package:squadron/squadron.dart';

import 'parser2_activator.dart'
    if (dart.library.js) 'package:squadron_sample/src/parser2/browser/parser2_worker_activator.dart'
    if (dart.library.html) 'package:squadron_sample/src/parser2/browser/parser2_worker_activator.dart'
    if (dart.library.io) 'package:squadron_sample/src/parser2/vm/parser2_worker_activator.dart';
import 'parser2_service.dart';

class Parser2WorkerPool extends WorkerPool<Parser2Worker>
    implements Parser2Service {
  Parser2WorkerPool(
      {required int batchSize, ConcurrencySettings? concurrencySettings})
      : super(() => createWorker(batchSize),
            concurrencySettings: concurrencySettings);

  @override
  Stream<List> parse(List lines, [CancellationToken? token]) =>
      stream((w) => w.parse(lines, token));
}

class Parser2Worker extends Worker implements Parser2Service {
  Parser2Worker(super.entryPoint, {super.args});

  @override
  Stream<List> parse(List lines, [CancellationToken? token]) =>
      stream(Parser2Service.parseCommand, args: lines, token: token);
}
