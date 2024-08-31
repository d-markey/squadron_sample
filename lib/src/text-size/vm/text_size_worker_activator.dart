import 'package:squadron/squadron.dart';

import '../text_size_worker_pool.dart' show TextSizeWorker;

import '../local_size_service.dart';
import 'text_size_worker.dart' as isolate;

TextSizeWorker createWorker(LocalWorker<LocalSizeService> sizeServer) {
  return TextSizeWorker(isolate.start,
      args: [sizeServer.channel?.share().serialize()]);
}
