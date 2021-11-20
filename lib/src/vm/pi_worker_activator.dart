import '../pi_digits_worker_pool.dart' show PiDigitsWorker;

import 'pi_worker.dart' as isolate;

PiDigitsWorker createWorker() => PiDigitsWorker(isolate.start);

String get workerPlatform => 'vm';
