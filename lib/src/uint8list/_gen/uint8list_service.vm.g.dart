// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
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
