// this is a helper file to expose Squadron workers and worker pools as a MyWorkerService

import 'dart:async';

import 'package:squadron/squadron.dart';
import 'package:squadron_sample/src/text-size/size_service.dart';

// this is where the stub file comes into action
//
// of course, if your application does not target both Web and VM platforms,
// you need not define a stub file and can go directly for your target platform
import 'my_worker_activator.dart'
    if (dart.library.js) 'package:squadron_sample/src/text-size/browser/my_worker_activator.dart'
    if (dart.library.html) 'package:squadron_sample/src/text-size/browser/my_worker_activator.dart'
    if (dart.library.io) 'package:squadron_sample/src/text-size/vm/my_worker_activator.dart';

abstract class MyWorkerService {
  FutureOr doSomethingWithTexts(List texts);

  static const doSomethingWithTextsCommand = 1;
}

// Implementation of TextSizeService as a Squadron worker pool
class MyWorkerPool extends WorkerPool<MyWorker> implements MyWorkerService {
  MyWorkerPool(LocalWorker<SizeService> sizeService,
      ConcurrencySettings concurrencySettings)
      : super(() => createWorker(sizeService),
            concurrencySettings: concurrencySettings);

  @override
  Future doSomethingWithTexts(List texts) =>
      execute((w) => w.doSomethingWithTexts(texts));
}

class MyWorker extends Worker implements MyWorkerService {
  MyWorker(dynamic entryPoint, {String? id, List args = const []})
      : super(entryPoint, id: id, args: args);

  @override
  Future doSomethingWithTexts(List texts) =>
      send(MyWorkerService.doSomethingWithTextsCommand, [texts]);
}
