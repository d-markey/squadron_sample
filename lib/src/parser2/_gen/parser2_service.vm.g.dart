// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
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
