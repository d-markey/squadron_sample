// this is a helper file to expose Squadron workers and worker pools as a ThumbnailService

import 'dart:typed_data';

import 'package:squadron/squadron.dart';

import 'thumbnail_service.dart';

// this is where the stub file comes into action
//
// of course, if your application does not target both Web and VM platforms,
// you need not define a stub file and can go directly for your target platform
import 'thumbnail_worker_activator.dart'
    if (dart.library.js) 'package:squadron_sample/src/thumbnails/browser/thumbnail_worker_activator.dart'
    if (dart.library.html) 'package:squadron_sample/src/thumbnails/browser/thumbnail_worker_activator.dart'
    if (dart.library.io) 'package:squadron_sample/src/thumbnails/vm/thumbnail_worker_activator.dart';

// Implementation of ThumbnailService as a Squadron worker pool
class ThumbnailWorkerPool extends WorkerPool<ThumbnailWorker>
    implements ThumbnailService {
  ThumbnailWorkerPool(ConcurrencySettings concurrencySettings)
      : super(createWorker, concurrencySettings: concurrencySettings);

  @override
  Future<Uint8List> getThumbnail(
          Uint8List imageData, int thumbWidth, int thumbHeight) =>
      execute((w) => w.getThumbnail(imageData, thumbWidth, thumbHeight));
}

// Implementation of ThumbnailService as a Squadron worker
class ThumbnailWorker extends Worker implements ThumbnailService {
  ThumbnailWorker(dynamic entryPoint, {List args = const []})
      : super(entryPoint, args: args);

  @override
  Future<Uint8List> getThumbnail(
          Uint8List imageData, int thumbWidth, int thumbHeight) =>
      send(ThumbnailService.getThumbnailCommand,
          args: [imageData, thumbWidth, thumbHeight]);
}
