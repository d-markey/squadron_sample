// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../codegen.dart';

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

/// Command ids used in operations map
const int _$pdfId = 1;

/// WorkerService operations for CodeGen
extension on CodeGen {
  OperationsMap _$getOperations() => OperationsMap({
        _$pdfId: ($req) async {
          final Uint8List? $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = await pdf($dsr.$1($req.args[0]));
          } finally {}
          return $res;
        },
      });
}

/// Invoker for CodeGen, implements the public interface to invoke the
/// remote service.
mixin _$CodeGen$Invoker on Invoker implements CodeGen {
  @override
  Future<Uint8List?> pdf(Uint8List? data) async {
    final dynamic $res = await send(_$pdfId, args: [data]);
    try {
      final $dsr = _$Deser(contextAware: false);
      return $dsr.$1($res);
    } finally {}
  }
}

/// Facade for CodeGen, implements other details of the service unrelated to
/// invoking the remote service.
mixin _$CodeGen$Facade implements CodeGen {}

/// WorkerService class for CodeGen
class _$CodeGen$WorkerService extends CodeGen implements WorkerService {
  _$CodeGen$WorkerService() : super();

  @override
  OperationsMap get operations => _$getOperations();
}

/// Service initializer for CodeGen
WorkerService $CodeGenInitializer(WorkerRequest $req) =>
    _$CodeGen$WorkerService();

/// Worker for CodeGen
base class CodeGenWorker extends Worker
    with _$CodeGen$Invoker, _$CodeGen$Facade
    implements CodeGen {
  CodeGenWorker(
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : super($CodeGenActivator(Squadron.platformType),
            threadHook: threadHook, exceptionManager: exceptionManager);

  CodeGenWorker.vm(
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : super($CodeGenActivator(SquadronPlatformType.vm),
            threadHook: threadHook, exceptionManager: exceptionManager);

  CodeGenWorker.js(
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : super($CodeGenActivator(SquadronPlatformType.js),
            threadHook: threadHook, exceptionManager: exceptionManager);

  CodeGenWorker.wasm(
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : super($CodeGenActivator(SquadronPlatformType.wasm),
            threadHook: threadHook, exceptionManager: exceptionManager);

  @override
  List? getStartArgs() => null;
}

/// Worker pool for CodeGen
base class CodeGenWorkerPool extends WorkerPool<CodeGenWorker>
    with _$CodeGen$Facade
    implements CodeGen {
  CodeGenWorkerPool(
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => CodeGenWorker(
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  CodeGenWorkerPool.vm(
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => CodeGenWorker.vm(
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  CodeGenWorkerPool.js(
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => CodeGenWorker.js(
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  CodeGenWorkerPool.wasm(
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => CodeGenWorker.wasm(
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  @override
  Future<Uint8List?> pdf(Uint8List? data) => execute((w) => w.pdf(data));
}

final class _$Deser extends MarshalingContext {
  _$Deser({super.contextAware});
  late final $0 = value<Uint8List>();
  late final $1 = Converter.allowNull($0);
}
