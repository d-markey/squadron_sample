// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

import 'package:squadron/squadron.dart';

import '../parser_service.dart';

void main() {
  /// Web entry point for ParserService
  run($ParserServiceInitializer);
}

EntryPoint $getParserServiceActivator(SquadronPlatformType platform) {
  if (platform.isJs) {
    return Squadron.uri('~/workers/parser_service.web.g.dart.js');
  } else if (platform.isWasm) {
    return Squadron.uri('~/workers/parser_service.web.g.dart.wasm');
  } else {
    throw UnsupportedError('${platform.label} not supported.');
  }
}
