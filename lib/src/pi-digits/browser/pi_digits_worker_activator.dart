import 'package:squadron_sample/web.g.dart';

import '../pi_digits_worker_pool.dart' show PiDigitsWorker;

PiDigitsWorker createWorker() =>
    PiDigitsWorker(Uri.parse('/workers/pi_digits_worker.dart.$workerExt'));

String get workerPlatform => 'browser';
