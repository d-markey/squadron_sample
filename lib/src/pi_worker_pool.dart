import 'dart:developer';

import 'package:flutter/foundation.dart';
import 'package:squadron/squadron_pool.dart';

import 'pi_digits_service_worker.dart';
import 'pi_worker_activator.dart'
    if (dart.library.js) 'package:squadron_sample/src/browser/pi_worker_activator.dart'
    if (dart.library.html) 'package:squadron_sample/src/browser/pi_worker_activator.dart'
    if (dart.library.io) 'package:squadron_sample/src/vm/pi_worker_activator.dart';

WorkerPool<PiDigitsWorker> createPiWorkerPool({int maxWorkers = 1}) {
  log('Creating a worker pool for $workerPlatform with kIsWeb = $kIsWeb, maxWorkers = $maxWorkers');
  return WorkerPool(() => createWorker(),
      minWorkers: maxWorkers, maxWorkers: maxWorkers);
}
