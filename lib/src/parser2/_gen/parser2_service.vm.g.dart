// GENERATED CODE - DO NOT MODIFY BY HAND
// dart format width=80

// **************************************************************************
// Generator: WorkerGenerator 9.0.0+1 (Squadron 7.4.0)
// **************************************************************************

import 'package:squadron/squadron.dart';

import '../parser2_service.dart';

void _start$Parser2Service(WorkerRequest command) {
  /// VM entry point for Parser2Service
  run($Parser2ServiceInitializer, command);
}

EntryPoint $getParser2ServiceActivator(SquadronPlatformType platform) {
  if (platform.isVm) {
    return _start$Parser2Service;
  } else {
    throw UnsupportedError('${platform.label} not supported.');
  }
}
