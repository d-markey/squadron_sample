// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

import 'package:squadron/squadron.dart';

import '../codegen.dart';

void main() {
  /// Web entry point for CodeGen
  run($CodeGenInitializer);
}

EntryPoint $getCodeGenActivator(SquadronPlatformType platform) {
  if (platform.isJs) {
    return Squadron.uri('/workers/codegen.web.g.dart.js');
  } else if (platform.isWasm) {
    return Squadron.uri('/workers/codegen.web.g.dart.wasm');
  } else {
    throw UnsupportedError('${platform.label} not supported.');
  }
}
