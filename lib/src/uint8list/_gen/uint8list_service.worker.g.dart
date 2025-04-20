// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../uint8list_service.dart';

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

/// Command ids used in operations map
const int _$pdfId = 1;

/// WorkerService operations for Uint8ListService
extension on Uint8ListService {
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

/// Invoker for Uint8ListService, implements the public interface to invoke the
/// remote service.
mixin _$Uint8ListService$Invoker on Invoker implements Uint8ListService {
  @override
  Future<Uint8List?> pdf(Uint8List? data) async {
    final dynamic $res = await send(_$pdfId, args: [data]);
    try {
      final $dsr = _$Deser(contextAware: false);
      return $dsr.$1($res);
    } finally {}
  }
}

/// Facade for Uint8ListService, implements other details of the service unrelated to
/// invoking the remote service.
mixin _$Uint8ListService$Facade implements Uint8ListService {}

/// WorkerService class for Uint8ListService
class _$Uint8ListService$WorkerService extends Uint8ListService
    implements WorkerService {
  _$Uint8ListService$WorkerService() : super();

  @override
  OperationsMap get operations => _$getOperations();
}

/// Service initializer for Uint8ListService
WorkerService $Uint8ListServiceInitializer(WorkerRequest $req) =>
    _$Uint8ListService$WorkerService();

/// Worker for Uint8ListService
base class Uint8ListServiceWorker extends Worker
    with _$Uint8ListService$Invoker, _$Uint8ListService$Facade
    implements Uint8ListService {
  Uint8ListServiceWorker(
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : super($Uint8ListServiceActivator(Squadron.platformType),
            threadHook: threadHook, exceptionManager: exceptionManager);

  Uint8ListServiceWorker.vm(
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : super($Uint8ListServiceActivator(SquadronPlatformType.vm),
            threadHook: threadHook, exceptionManager: exceptionManager);

  Uint8ListServiceWorker.js(
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : super($Uint8ListServiceActivator(SquadronPlatformType.js),
            threadHook: threadHook, exceptionManager: exceptionManager);

  Uint8ListServiceWorker.wasm(
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : super($Uint8ListServiceActivator(SquadronPlatformType.wasm),
            threadHook: threadHook, exceptionManager: exceptionManager);

  @override
  List? getStartArgs() => null;
}

/// Worker pool for Uint8ListService
base class Uint8ListServiceWorkerPool extends WorkerPool<Uint8ListServiceWorker>
    with _$Uint8ListService$Facade
    implements Uint8ListService {
  Uint8ListServiceWorkerPool(
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => Uint8ListServiceWorker(
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  Uint8ListServiceWorkerPool.vm(
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => Uint8ListServiceWorker.vm(
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  Uint8ListServiceWorkerPool.js(
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => Uint8ListServiceWorker.js(
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  Uint8ListServiceWorkerPool.wasm(
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => Uint8ListServiceWorker.wasm(
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
