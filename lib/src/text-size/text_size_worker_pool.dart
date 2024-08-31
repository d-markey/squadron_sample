// this is a helper file to expose Squadron workers and worker pools as a MyWorkerService

import 'dart:async';

import 'package:squadron/squadron.dart';
import 'package:squadron_sample/src/text-size/local_size_service.dart';

// this is where the stub file comes into action
//
// of course, if your application does not target both Web and VM platforms,
// you need not define a stub file and can go directly for your target platform
import 'text_size_worker_activator.dart'
    if (dart.library.js_interop) 'package:squadron_sample/src/text-size/browser/text_size_worker_activator.dart'
    if (dart.library.io) 'package:squadron_sample/src/text-size/vm/text_size_worker_activator.dart';

abstract class TextSizeService {
  FutureOr doSomethingWithTexts(List texts);

  static const doSomethingWithTextsCommand = 1;
}

// Implementation of TextSizeService as a Squadron worker pool
class TextSizeWorkerPool extends WorkerPool<TextSizeWorker>
    implements TextSizeService {
  TextSizeWorkerPool(LocalWorker<LocalSizeService> sizeService,
      ConcurrencySettings concurrencySettings)
      : super(() => createWorker(sizeService),
            concurrencySettings: concurrencySettings);

  @override
  Future doSomethingWithTexts(List texts) =>
      execute((w) => w.doSomethingWithTexts(texts));
}

class TextSizeWorker extends Worker implements TextSizeService {
  TextSizeWorker(super.entryPoint, {super.args});

  @override
  Future doSomethingWithTexts(List texts) =>
      send(TextSizeService.doSomethingWithTextsCommand, args: [texts]);
}
