import 'package:squadron/squadron.dart';

import '../my_worker_service.dart';
import '../local_size_service.dart';

void start(List command) => run((startRequest) {
      Squadron.setLogger(DevSquadronLogger());
      final channel = Channel.deserialize(startRequest.args[0])!;
      final sizeClient = LocalSizeClient(channel);
      return MyWorkerServiceImpl(sizeClient);
    }, command);
