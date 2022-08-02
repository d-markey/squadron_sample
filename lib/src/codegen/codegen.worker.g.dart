// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'codegen.dart';

// **************************************************************************
// SquadronServiceGenerator
// **************************************************************************

Map<int, CommandHandler> buildCodeGenOperations(CodeGen instance) => {
      1: (r) => instance.service1(r.args[0]),
    };

class CodeGenWorker extends Worker implements CodeGen {
  CodeGenWorker() : super($CodeGenActivator);
  @override
  Future<int> service1(int n) => send(1, args: [n]);
}

class CodeGenWorkerPool extends WorkerPool<CodeGenWorker> implements CodeGen {
  CodeGenWorkerPool({ConcurrencySettings? concurrencySettings})
      : super(() => CodeGenWorker(), concurrencySettings: concurrencySettings);
  @override
  Future<int> service1(int n) => execute((w) => w.service1(n));
}
