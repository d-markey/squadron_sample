import 'pi_digits.dart';

String get workerPlatform => 'Unsupported';

PiDigitsWorker createWorker() => throw UnsupportedError('Not supported on this platform');
