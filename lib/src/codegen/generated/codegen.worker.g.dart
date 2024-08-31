// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../codegen.dart';

// **************************************************************************
// Generator: WorkerGenerator 6.0.0
// **************************************************************************

/// WorkerService class for CodeGen
class _$CodeGenWorkerService extends CodeGen implements WorkerService {
  _$CodeGenWorkerService() : super();

  @override
  Map<int, CommandHandler> get operations => _operations;

  late final Map<int, CommandHandler> _operations =
      Map.unmodifiable(<int, CommandHandler>{
    _$incId: ($in) => inc(Cast.toInt($in.args[0])),
  });

  static const int _$incId = 1;
}

/// Service initializer for CodeGen
WorkerService $CodeGenInitializer(WorkerRequest $in) =>
    _$CodeGenWorkerService();

/// Worker for CodeGen
class CodeGenWorker extends Worker implements CodeGen {
  CodeGenWorker({PlatformThreadHook? threadHook})
      : super($CodeGenActivator, threadHook: threadHook);

  @override
  Future<int> inc(int n) => send(_$CodeGenWorkerService._$incId, args: [n]);
}

/// Worker pool for CodeGen
class CodeGenWorkerPool extends WorkerPool<CodeGenWorker> implements CodeGen {
  CodeGenWorkerPool(
      {ConcurrencySettings? concurrencySettings,
      PlatformThreadHook? threadHook})
      : super(() => CodeGenWorker(threadHook: threadHook),
            concurrencySettings: concurrencySettings);

  @override
  Future<int> inc(int n) => execute((w) => w.inc(n));
}
