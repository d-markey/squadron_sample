import 'dart:async';

import 'package:squadron/squadron_annotations.dart';
import 'package:squadron/squadron.dart';

import 'codegen.activator.g.dart';

part 'codegen.worker.g.dart';

@SquadronService(baseUrl: '/workers')
class CodeGen extends WorkerService {
  @SquadronMethod()
  Future<int> service1(int n) async => n;

  @override
  late final Map<int, CommandHandler> operations = buildCodeGenOperations(this);
}
