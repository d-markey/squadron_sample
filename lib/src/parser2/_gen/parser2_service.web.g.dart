// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

import 'package:squadron/squadron.dart';

import '../parser2_service.dart';

void main() {
  /// Web entry point for Parser2Service
  run($Parser2ServiceInitializer);
}

EntryPoint $getParser2ServiceActivator(SquadronPlatformType platform) {
  if (platform.isJs) {
    return Squadron.uri('~/workers/parser2_service.web.g.dart.js');
  } else if (platform.isWasm) {
    return Squadron.uri('~/workers/parser2_service.web.g.dart.wasm');
  } else {
    throw UnsupportedError('${platform.label} not supported.');
  }
}
