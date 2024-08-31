import 'package:squadron/squadron.dart';

import '../parser2_service.dart';

void start(WorkerRequest command) =>
    run((startRequest) => Parser2Service(startRequest.args[0]), command);
