import 'dart:async';

import 'package:squadron/squadron.dart';
import 'package:squadron_sample/web.g.dart';

import 'generated/codegen.activator.g.dart';

part 'generated/codegen.worker.g.dart';

@SquadronService(baseUrl: '/workers', wasm: workerExt == 'wasm')
class CodeGen {
  @SquadronMethod()
  Future<int> inc(int n) async => n + 1;
}
