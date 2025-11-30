// GENERATED CODE - DO NOT MODIFY BY HAND
// dart format width=80

// **************************************************************************
// Generator: WorkerGenerator 9.0.0+1 (Squadron 7.4.0)
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
