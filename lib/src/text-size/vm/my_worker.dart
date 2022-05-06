import 'package:squadron/squadron_service.dart';
import 'package:squadron/squadron_worker.dart';

import '../my_worker_service.dart';
import '../local_size_service.dart';

void start(Map command) => run((startRequest) {
      Squadron.setLogger(DevSquadronLogger());
      final channel = Channel.deserialize(startRequest.args[0])!;
      final sizeClient = LocalSizeClient(channel);
      return MyWorkerServiceImpl(sizeClient);
    }, command);
