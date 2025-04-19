// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

import 'package:squadron/squadron.dart';

import '../perf.dart';

void main() {
  /// Web entry point for Perf
  run($PerfInitializer);
}

EntryPoint $getPerfActivator(SquadronPlatformType platform) {
  if (platform.isJs) {
    return Squadron.uri('/workers/perf.web.g.dart.js');
  } else if (platform.isWasm) {
    return Squadron.uri('/workers/perf.web.g.dart.wasm');
  } else {
    throw UnsupportedError('${platform.label} not supported.');
  }
}
