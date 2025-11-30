// GENERATED CODE - DO NOT MODIFY BY HAND
// dart format width=80

// **************************************************************************
// Generator: WorkerGenerator 9.0.0+1 (Squadron 7.4.0)
// **************************************************************************

import 'package:squadron/squadron.dart';

import '../text_size_service.dart';

void main() {
  /// Web entry point for TextSizeService
  run($TextSizeServiceInitializer);
}

EntryPoint $getTextSizeServiceActivator(SquadronPlatformType platform) {
  if (platform.isJs) {
    return Squadron.uri('~/workers/text_size_service.web.g.dart.js');
  } else if (platform.isWasm) {
    return Squadron.uri('~/workers/text_size_service.web.g.dart.wasm');
  } else {
    throw UnsupportedError('${platform.label} not supported.');
  }
}
