import '../pi_digits_service_worker.dart';

PiDigitsWorker createWorker() => PiDigitsWorker('pi_worker.dart.js');

String get workerPlatform => 'browser';
