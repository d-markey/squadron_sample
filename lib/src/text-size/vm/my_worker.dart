import 'package:squadron/squadron_service.dart';
import 'package:squadron/squadron_worker.dart';

import '../my_worker_service.dart';
import '../size_service.dart';

void start(Map command) => run((startRequest) {
      Squadron.logger = DevSquadronLogger();
      final channel = Channel.deserialize(startRequest.args[0])!;
      final sizeClient = SizeClient(channel);
      return MyWorkerServiceImpl(sizeClient);
    }, command);
