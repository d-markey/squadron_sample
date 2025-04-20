// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

import 'package:squadron/squadron.dart';

import '../http_service.dart';

void _start$HttpService(WorkerRequest command) {
  /// VM entry point for HttpService
  run($HttpServiceInitializer, command);
}

EntryPoint $getHttpServiceActivator(SquadronPlatformType platform) {
  if (platform.isVm) {
    return _start$HttpService;
  } else {
    throw UnsupportedError('${platform.label} not supported.');
  }
}
