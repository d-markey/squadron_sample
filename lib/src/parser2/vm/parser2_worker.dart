import 'package:squadron/squadron_service.dart';

import '../parser2_service.dart';

void start(List command) =>
    run((startRequest) => Parser2Service(startRequest.args[0]), command);
