import 'package:squadron/squadron_service.dart';

import '../pi_digits_service.dart';

void start(Map command) =>
    run((startRequest) => PiDigitsServiceImpl(), command);
