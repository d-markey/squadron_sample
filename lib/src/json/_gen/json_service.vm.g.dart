// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

import 'package:squadron/squadron.dart';

import '../json_service.dart';

void _start$JsonService(WorkerRequest command) {
  /// VM entry point for JsonService
  run($JsonServiceInitializer, command);
}

EntryPoint $getJsonServiceActivator(SquadronPlatformType platform) {
  if (platform.isVm) {
    return _start$JsonService;
  } else {
    throw UnsupportedError('${platform.label} not supported.');
  }
}
