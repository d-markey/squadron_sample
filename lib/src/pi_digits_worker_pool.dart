import 'package:squadron/squadron.dart';

import 'pi_digits_service.dart';
import 'pi_digits_worker_activator.dart'
    if (dart.library.js) 'package:squadron_sample/src/browser/pi_worker_activator.dart'
    if (dart.library.html) 'package:squadron_sample/src/browser/pi_worker_activator.dart'
    if (dart.library.io) 'package:squadron_sample/src/vm/pi_worker_activator.dart';

class PiDigitsWorkerPool extends WorkerPool<PiDigitsWorker>
    implements PiDigitsService {
  PiDigitsWorkerPool(
      ConcurrencySettings concurrencySettings)
      : super(createWorker,
            concurrencySettings: concurrencySettings);

  @override
  Future<int> getNth(int n) => execute((w) => w.getNth(n));

  @override
  Stream<int> getNDigits(int start, int n) =>
      stream((w) => w.getNDigits(start, n));
}

class PiDigitsWorker extends Worker implements PiDigitsService {
  PiDigitsWorker(dynamic entryPoint, {String? id, List args = const []})
      : super(entryPoint, id: id, args: args);

  @override
  Future<int> getNth(int n) => send(PiDigitsService.getNthCommand, [n]);

  @override
  Stream<int> getNDigits(int start, int n) =>
      stream(PiDigitsService.getNDigitsCommand, [start, n]);
}
