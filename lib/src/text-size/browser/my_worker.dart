import 'package:squadron/squadron_service.dart';
import 'package:squadron/squadron_worker.dart';

import '../size_service.dart';
import '../my_worker_service.dart';

void main() => run((startRequest) {
      Squadron.logger = ConsoleSquadronLogger();
      final channel = Channel.deserialize(startRequest.args[0])!;
      final sizeClient = SizeClient(channel);
      return MyWorkerServiceImpl(sizeClient);
    });
