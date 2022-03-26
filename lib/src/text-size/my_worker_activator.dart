import 'package:squadron/squadron.dart';

import 'my_worker_pool.dart' show MyWorker;
import 'size_service.dart';

MyWorker createWorker(LocalWorker<SizeService> sizeServer) =>
    throw UnsupportedError('Not supported on this platform');
