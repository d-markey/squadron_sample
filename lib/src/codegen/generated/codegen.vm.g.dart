// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

import 'package:squadron/squadron.dart';

import '../codegen.dart';

void _start$CodeGen(WorkerRequest command) {
  /// VM entry point for CodeGen
  run($CodeGenInitializer, command);
}

EntryPoint $getCodeGenActivator(SquadronPlatformType platform) {
  if (platform.isVm) {
    return _start$CodeGen;
  } else {
    throw UnsupportedError('${platform.label} not supported.');
  }
}
