import 'package:squadron/squadron.dart';

import 'text_size_worker_pool.dart' show TextSizeWorker;
import 'local_size_service.dart';

TextSizeWorker createWorker(LocalWorker<LocalSizeService> sizeServer) =>
    throw UnsupportedError('Not supported on this platform');
