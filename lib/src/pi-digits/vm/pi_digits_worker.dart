import 'package:squadron/squadron.dart';

import '../pi_digits_service.dart';

void start(WorkerRequest command) =>
    run((startRequest) => PiDigitsServiceImpl(), command);
