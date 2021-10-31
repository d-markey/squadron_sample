import 'dart:developer';

// ignore: avoid_web_libraries_in_flutter
import 'dart:html';

import 'package:squadron/squadron.dart';

import '../pi_digits.dart';

String get workerPlatform => 'browser';

PiDigitsWorker createWorker() => PiDigitsWorker('pi_worker_browser.dart.js');

void main() {
  log('Worker started!');
  final scope = DedicatedWorkerGlobalScope.instance;
  final operations = <int, CommandHandler>{};

  final com = MessageChannel();
  com.port1.onMessage.listen((MessageEvent e) {
    final req = WorkerRequest.deserialize(e.data);
    if (req.terminate) {
      scope.close();
    } else {
      Worker.process(operations, req);
    }
  });

  scope.onMessage.listen((MessageEvent e) {
    final startRequest = WorkerRequest.deserialize(e.data);
    assert(startRequest.connect == true);
    Worker.connect(startRequest.client, com.port2,
        operations: operations, serviceOperations: PiDigitsService().operations);
  });
}
