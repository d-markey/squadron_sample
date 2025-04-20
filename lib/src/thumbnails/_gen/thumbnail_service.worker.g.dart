// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../thumbnail_service.dart';

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

/// Command ids used in operations map
const int _$getThumbnailId = 1;

/// WorkerService operations for ThumbnailService
extension on ThumbnailService {
  OperationsMap _$getOperations() => OperationsMap({
        _$getThumbnailId: ($req) async {
          final Uint8List $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = await getThumbnail($dsr.$0($req.args[0]),
                $dsr.$1($req.args[1]), $dsr.$1($req.args[2]));
          } finally {}
          return $res;
        },
      });
}

/// Invoker for ThumbnailService, implements the public interface to invoke the
/// remote service.
mixin _$ThumbnailService$Invoker on Invoker implements ThumbnailService {
  @override
  Future<Uint8List> getThumbnail(
      Uint8List imageData, int thumbWidth, int thumbHeight) async {
    final dynamic $res = await send(_$getThumbnailId,
        args: [imageData, thumbWidth, thumbHeight]);
    try {
      final $dsr = _$Deser(contextAware: false);
      return $dsr.$0($res);
    } finally {}
  }
}

/// Facade for ThumbnailService, implements other details of the service unrelated to
/// invoking the remote service.
mixin _$ThumbnailService$Facade implements ThumbnailService {}

/// WorkerService class for ThumbnailService
class _$ThumbnailService$WorkerService extends ThumbnailService
    implements WorkerService {
  _$ThumbnailService$WorkerService() : super();

  @override
  OperationsMap get operations => _$getOperations();
}

/// Service initializer for ThumbnailService
WorkerService $ThumbnailServiceInitializer(WorkerRequest $req) =>
    _$ThumbnailService$WorkerService();

/// Worker for ThumbnailService
base class ThumbnailServiceWorker extends Worker
    with _$ThumbnailService$Invoker, _$ThumbnailService$Facade
    implements ThumbnailService {
  ThumbnailServiceWorker(
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : super($ThumbnailServiceActivator(Squadron.platformType),
            threadHook: threadHook, exceptionManager: exceptionManager);

  ThumbnailServiceWorker.vm(
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : super($ThumbnailServiceActivator(SquadronPlatformType.vm),
            threadHook: threadHook, exceptionManager: exceptionManager);

  ThumbnailServiceWorker.js(
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : super($ThumbnailServiceActivator(SquadronPlatformType.js),
            threadHook: threadHook, exceptionManager: exceptionManager);

  ThumbnailServiceWorker.wasm(
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : super($ThumbnailServiceActivator(SquadronPlatformType.wasm),
            threadHook: threadHook, exceptionManager: exceptionManager);

  @override
  List? getStartArgs() => null;
}

/// Worker pool for ThumbnailService
base class ThumbnailServiceWorkerPool extends WorkerPool<ThumbnailServiceWorker>
    with _$ThumbnailService$Facade
    implements ThumbnailService {
  ThumbnailServiceWorkerPool(
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => ThumbnailServiceWorker(
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  ThumbnailServiceWorkerPool.vm(
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => ThumbnailServiceWorker.vm(
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  ThumbnailServiceWorkerPool.js(
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => ThumbnailServiceWorker.js(
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  ThumbnailServiceWorkerPool.wasm(
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => ThumbnailServiceWorker.wasm(
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  @override
  Future<Uint8List> getThumbnail(
          Uint8List imageData, int thumbWidth, int thumbHeight) =>
      execute((w) => w.getThumbnail(imageData, thumbWidth, thumbHeight));
}

final class _$Deser extends MarshalingContext {
  _$Deser({super.contextAware});
  late final $0 = value<Uint8List>();
  late final $1 = value<int>();
}
