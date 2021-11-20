import '../pi_digits_worker_pool.dart' show PiDigitsWorker;

PiDigitsWorker createWorker() => PiDigitsWorker('pi_worker.dart.js');

String get workerPlatform => 'browser';
