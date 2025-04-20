// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
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
