import 'package:squadron/squadron.dart';

import '../my_worker_pool.dart' show MyWorker;
import '../local_size_service.dart';

MyWorker createWorker(LocalWorker<LocalSizeService> sizeServer) {
  Squadron.info('Creating worker');
  return MyWorker('/workers/my_worker.dart.js',
      args: [sizeServer.sharedChannel?.serialize()]);
}
