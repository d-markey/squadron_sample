// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

import 'package:squadron/squadron.dart';

import '../perf.dart';

void _start$Perf(WorkerRequest command) {
  /// VM entry point for Perf
  run($PerfInitializer, command);
}

EntryPoint $getPerfActivator(SquadronPlatformType platform) {
  if (platform.isVm) {
    return _start$Perf;
  } else {
    throw UnsupportedError('${platform.label} not supported.');
  }
}
