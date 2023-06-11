import 'package:squadron/squadron_service.dart';

import '../pi_digits_service.dart';

void start(List command) =>
    run((startRequest) => PiDigitsServiceImpl(), command);
