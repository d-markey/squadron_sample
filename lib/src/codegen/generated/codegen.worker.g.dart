// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../codegen.dart';

// **************************************************************************
// Generator: WorkerGenerator 2.4.1
// **************************************************************************

/// WorkerService class for CodeGen
class _$CodeGenWorkerService extends CodeGen implements WorkerService {
  _$CodeGenWorkerService() : super();

  @override
  Map<int, CommandHandler> get operations => _operations;

  late final Map<int, CommandHandler> _operations = {
    _$incId: ($) => inc($.args[0])
  };

  static const int _$incId = 1;
}

/// Service initializer for CodeGen
WorkerService $CodeGenInitializer(WorkerRequest startRequest) =>
    _$CodeGenWorkerService();

/// Operations map for CodeGen
@Deprecated(
    'squadron_builder now supports "plain old Dart objects" as services. '
    'Services do not need to derive from WorkerService nor do they need to mix in '
    'with \$CodeGenOperations anymore.')
mixin $CodeGenOperations on WorkerService {
  @override
  // not needed anymore, generated for compatibility with previous versions of squadron_builder
  Map<int, CommandHandler> get operations => WorkerService.noOperations;
}

/// Worker for CodeGen
class CodeGenWorker extends Worker implements CodeGen {
  CodeGenWorker({PlatformWorkerHook? platformWorkerHook})
      : super($CodeGenActivator, platformWorkerHook: platformWorkerHook);

  @override
  Future<int> inc(int n) => send(_$CodeGenWorkerService._$incId, args: [n]);
}

/// Worker pool for CodeGen
class CodeGenWorkerPool extends WorkerPool<CodeGenWorker> implements CodeGen {
  CodeGenWorkerPool(
      {ConcurrencySettings? concurrencySettings,
      PlatformWorkerHook? platformWorkerHook})
      : super(() => CodeGenWorker(platformWorkerHook: platformWorkerHook),
            concurrencySettings: concurrencySettings);

  @override
  Future<int> inc(int n) => execute((w) => w.inc(n));
}
