import 'package:squadron/squadron.dart';

import '../my_worker_pool.dart' show MyWorker;

import '../local_size_service.dart';
import 'my_worker.dart' as isolate;

MyWorker createWorker(LocalWorker<LocalSizeService> sizeServer) {
  return MyWorker(isolate.start,
      args: [sizeServer.channel?.share().serialize()]);
}
