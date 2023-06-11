import 'dart:async';

import 'package:squadron/squadron_annotations.dart';
import 'package:squadron/squadron.dart';

import 'generated/codegen.activator.g.dart';

part 'generated/codegen.worker.g.dart';

@SquadronService(baseUrl: '/workers')
class CodeGen extends WorkerService with $CodeGenOperations {
  @SquadronMethod()
  Future<int> inc(int n) async => n + 1;
}
