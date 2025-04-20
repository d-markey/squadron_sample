import 'dart:async';
import 'dart:math';

import 'package:cancelation_token/cancelation_token.dart';
import 'package:squadron/squadron.dart';

import '../logging_service.dart';
import '_gen/pi_digits_service.activator.g.dart';

part '_gen/pi_digits_service.worker.g.dart';

void _noop() {}
Future noop() => Future(_noop);

@SquadronService(baseUrl: '~/workers')
class PiDigitsService {
  PiDigitsService(@localWorker this.logger) {
    logger.log(
        '[$threadId] [S] PiDigitsServiceImpl instantiated, hashCode = ${hashCode.hex}');
  }

  final ILoggingService logger;

  // see https://dept-info.labri.fr/~denis/Enseignement/2017-PG306/TP01/pi.java
  @squadronMethod
  Stream<int> getNDigits(int start, int n, CancelationToken? token) async* {
    final end = start + n;
    logger.log('[$threadId] [S] digits $start-${end - 1} started...');
    var i = start;
    while (i < end) {
      if (i % 50 == 0) {
        // avoid flooding the event loop with noop Futures
        // check every 50 digits only
        await noop();
        token?.throwIfCanceled();
      }
      yield getNth(i);
      i++;
    }
    logger.log('[$threadId] [S] digits $start-${end - 1} done.');
  }

  int getNth(int n) {
    if (n < 0) return -1;
    n -= 1;
    double x =
        4 * piTerm(1, n) - 2 * piTerm(4, n) - piTerm(5, n) - piTerm(6, n);
    x = x - x.floor();
    return (x * 16).toInt();
  }

  static double piTerm(int j, int n) {
    // Calculate the left sum
    double s = 0;
    int r = j;
    for (int k = 0; k <= n; k++) {
      s += powMod(16, n - k, r) / r;
      s = s - s.floor();
      r += 8;
    }
    // Calculate the right sum
    double t = 0;
    int k = n + 1;
    // Keep iterating until t converges (stops changing)
    r = 8 * k + j;
    while (true) {
      double newt = t + pow(16, n - k) / r;
      if (t == newt) {
        break;
      } else {
        t = newt;
      }
      k++;
      r += 8;
    }
    return s + t;
  }

  static int powMod(int a, int b, int m) {
    int tempo;
    if (b == 0) {
      tempo = 1;
    } else if (b == 1) {
      tempo = a;
    } else {
      int temp = powMod(a, b ~/ 2, m);
      if (b % 2 == 0) {
        tempo = (temp * temp) % m;
      } else {
        tempo = ((temp * temp) % m) * a % m;
      }
    }
    return tempo;
  }
}
