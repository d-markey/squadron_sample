// Creation of the Isolate

import '../thumbnail_worker_pool.dart' show ThumbnailWorker;

import 'thumbnail_worker.dart' as isolate;

ThumbnailWorker createWorker() => ThumbnailWorker(isolate.start);
