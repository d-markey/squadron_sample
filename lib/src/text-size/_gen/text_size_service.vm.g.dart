// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

import 'package:squadron/squadron.dart';

import '../text_size_service.dart';

void _start$TextSizeService(WorkerRequest command) {
  /// VM entry point for TextSizeService
  run($TextSizeServiceInitializer, command);
}

EntryPoint $getTextSizeServiceActivator(SquadronPlatformType platform) {
  if (platform.isVm) {
    return _start$TextSizeService;
  } else {
    throw UnsupportedError('${platform.label} not supported.');
  }
}
