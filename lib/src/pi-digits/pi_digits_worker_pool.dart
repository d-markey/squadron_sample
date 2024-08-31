import 'package:squadron/squadron.dart';
import 'package:squadron_sample/root_logger.dart';

import 'pi_digits_service.dart';
import 'pi_digits_worker_activator.dart'
    if (dart.library.js_interop) 'package:squadron_sample/src/pi-digits/browser/pi_digits_worker_activator.dart'
    if (dart.library.io) 'package:squadron_sample/src/pi-digits/vm/pi_digits_worker_activator.dart';

class PiDigitsWorkerPool extends WorkerPool<PiDigitsWorker>
    implements PiDigitsService {
  PiDigitsWorkerPool(ConcurrencySettings concurrencySettings)
      : super(createWorker, concurrencySettings: concurrencySettings);

  @override
  Future<int> getNth(int n) => execute((w) => w.getNth(n));

  @override
  Stream<int> getNDigits(int start, int n, CancelationToken? token) =>
      stream((w) {
        rootLogger.i('batch $start-${start + n} sent to ${w.hashCode.hex}');
        return w.getNDigits(start, n, token);
      });
}

class PiDigitsWorker extends Worker implements PiDigitsService {
  PiDigitsWorker(super.entryPoint, {super.args});

  @override
  Future<int> getNth(int n) =>
      send(PiDigitsService.getNthCommand, args: [n]).then(Cast.toValue());

  @override
  Stream<int> getNDigits(int start, int n, CancelationToken? token) =>
      stream(PiDigitsService.getNDigitsCommand, args: [start, n], token: token)
          .map(Cast.toValue());
}
