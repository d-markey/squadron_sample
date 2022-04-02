import 'package:squadron/squadron.dart';

import 'my_worker_pool.dart' show MyWorker;
import 'local_size_service.dart';

MyWorker createWorker(LocalWorker<LocalSizeService> sizeServer) =>
    throw UnsupportedError('Not supported on this platform');
