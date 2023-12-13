import 'package:squadron/squadron.dart';

import '../pi_digits_service.dart';

void start(List command) =>
    run((startRequest) => PiDigitsServiceImpl(), command);
