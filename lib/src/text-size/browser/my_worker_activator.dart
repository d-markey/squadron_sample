import 'package:squadron/squadron_local_worker.dart';

import '../my_worker_pool.dart' show MyWorker;
import '../size_service.dart';

MyWorker createWorker(LocalWorker<SizeService> sizeServer) {
  Squadron.info('Creating worker');
  return MyWorker('/workers/my_worker.dart.js',
      args: [sizeServer.channel?.share().serialize()]);
}
