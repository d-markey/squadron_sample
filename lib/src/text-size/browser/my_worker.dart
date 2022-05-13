import 'package:squadron/squadron_service.dart';
import 'package:squadron/squadron_worker.dart';

import '../local_size_service.dart';
import '../my_worker_service.dart';

void main() => run((startRequest) {
      Squadron.info('Initializing LocalSizeClient with ${startRequest.args[0]}');
      final channel = Channel.deserialize(startRequest.args[0])!;
      final sizeClient = LocalSizeClient(channel);
      return MyWorkerServiceImpl(sizeClient);
    });
