import 'pi_digits_worker_pool.dart' show PiDigitsWorker;

PiDigitsWorker createWorker() =>
    throw UnsupportedError('Not supported on this platform');

String get workerPlatform => 'Unsupported';
