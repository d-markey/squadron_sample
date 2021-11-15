import 'dart:developer';

import 'package:squadron/squadron_service.dart';

import '../pi_digits_service.dart';

void main() {
  log('Worker starting');
  run((startRequest) => PiDigitsService(), const {});
}
