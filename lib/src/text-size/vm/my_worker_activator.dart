import 'package:squadron/squadron.dart';

import '../my_worker_pool.dart' show MyWorker;

import '../size_service.dart';
import 'my_worker.dart' as isolate;

MyWorker createWorker(LocalWorker<SizeService> sizeServer) {
  return MyWorker(isolate.start,
      args: [sizeServer.channel?.share().serialize()]);
}
