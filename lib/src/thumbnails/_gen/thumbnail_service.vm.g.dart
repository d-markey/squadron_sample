// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

import 'package:squadron/squadron.dart';

import '../thumbnail_service.dart';

void _start$ThumbnailService(WorkerRequest command) {
  /// VM entry point for ThumbnailService
  run($ThumbnailServiceInitializer, command);
}

EntryPoint $getThumbnailServiceActivator(SquadronPlatformType platform) {
  if (platform.isVm) {
    return _start$ThumbnailService;
  } else {
    throw UnsupportedError('${platform.label} not supported.');
  }
}
