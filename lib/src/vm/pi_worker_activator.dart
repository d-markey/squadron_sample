import '../pi_digits_service_worker.dart';
import 'pi_worker.dart' as pi_worker;

PiDigitsWorker createWorker() => PiDigitsWorker(pi_worker.start);

String get workerPlatform => 'vm';
