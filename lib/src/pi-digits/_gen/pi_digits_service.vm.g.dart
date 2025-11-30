// GENERATED CODE - DO NOT MODIFY BY HAND
// dart format width=80

// **************************************************************************
// Generator: WorkerGenerator 9.0.0+1 (Squadron 7.4.0)
// **************************************************************************

import 'package:squadron/squadron.dart';

import '../pi_digits_service.dart';

void _start$PiDigitsService(WorkerRequest command) {
  /// VM entry point for PiDigitsService
  run($PiDigitsServiceInitializer, command);
}

EntryPoint $getPiDigitsServiceActivator(SquadronPlatformType platform) {
  if (platform.isVm) {
    return _start$PiDigitsService;
  } else {
    throw UnsupportedError('${platform.label} not supported.');
  }
}
