// GENERATED CODE - DO NOT MODIFY BY HAND
// dart format width=80

// **************************************************************************
// Generator: WorkerGenerator 9.0.0+1 (Squadron 7.4.0)
// **************************************************************************

import 'package:squadron/squadron.dart';

import '../uint8list_service.dart';

void _start$Uint8ListService(WorkerRequest command) {
  /// VM entry point for Uint8ListService
  run($Uint8ListServiceInitializer, command);
}

EntryPoint $getUint8ListServiceActivator(SquadronPlatformType platform) {
  if (platform.isVm) {
    return _start$Uint8ListService;
  } else {
    throw UnsupportedError('${platform.label} not supported.');
  }
}
