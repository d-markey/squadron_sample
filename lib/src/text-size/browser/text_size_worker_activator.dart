import 'package:squadron/squadron.dart';
import 'package:squadron_sample/web.g.dart';

import '../../../root_logger.dart';
import '../local_size_service.dart';
import '../text_size_worker_pool.dart' show TextSizeWorker;

TextSizeWorker createWorker(LocalWorker<LocalSizeService> sizeServer) {
  rootLogger.i('Creating worker');
  return TextSizeWorker(Uri.parse('/workers/text_size_worker.dart.$workerExt'),
      args: [sizeServer.sharedChannel?.serialize()]);
}
