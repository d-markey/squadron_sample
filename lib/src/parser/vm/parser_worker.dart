import 'package:squadron/squadron.dart';

import '../parser_service.dart';

void start(WorkerRequest command) =>
    run((startRequest) => ParserService(), command);
