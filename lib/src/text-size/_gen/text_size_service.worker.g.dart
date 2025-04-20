// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../text_size_service.dart';

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

/// Command ids used in operations map
const int _$doSomethingWithTextsId = 1;

/// WorkerService operations for TextSizeService
extension on TextSizeService {
  OperationsMap _$getOperations() => OperationsMap({
        _$doSomethingWithTextsId: ($req) async {
          final String $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = await doSomethingWithTexts($dsr.$1($req.args[0]));
          } finally {}
          return $res;
        },
      });
}

/// Invoker for TextSizeService, implements the public interface to invoke the
/// remote service.
mixin _$TextSizeService$Invoker on Invoker implements TextSizeService {
  @override
  Future<String> doSomethingWithTexts(List<String> texts) async {
    final dynamic $res = await send(_$doSomethingWithTextsId, args: [texts]);
    try {
      final $dsr = _$Deser(contextAware: false);
      return $dsr.$0($res);
    } finally {}
  }
}

/// Facade for TextSizeService, implements other details of the service unrelated to
/// invoking the remote service.
mixin _$TextSizeService$Facade implements TextSizeService {}

/// WorkerService class for TextSizeService
class _$TextSizeService$WorkerService extends TextSizeService
    implements WorkerService {
  _$TextSizeService$WorkerService(super.logger, super.sizeService) : super();

  @override
  OperationsMap get operations => _$getOperations();
}

/// Service initializer for TextSizeService
WorkerService $TextSizeServiceInitializer(WorkerRequest $req) {
  final $dsr = _$Deser(contextAware: false);
  return _$TextSizeService$WorkerService(
      $LocalILoggingServiceClient($dsr.$2($req.args[0])),
      $LocalILocalSizeClient($dsr.$2($req.args[1])));
}

/// Worker for TextSizeService
base class TextSizeServiceWorker extends Worker
    with _$TextSizeService$Invoker, _$TextSizeService$Facade
    implements TextSizeService {
  TextSizeServiceWorker(this.logger, this.sizeService,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger, sizeService],
        super($TextSizeServiceActivator(Squadron.platformType),
            threadHook: threadHook, exceptionManager: exceptionManager);

  TextSizeServiceWorker.vm(this.logger, this.sizeService,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger, sizeService],
        super($TextSizeServiceActivator(SquadronPlatformType.vm),
            threadHook: threadHook, exceptionManager: exceptionManager);

  TextSizeServiceWorker.js(this.logger, this.sizeService,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger, sizeService],
        super($TextSizeServiceActivator(SquadronPlatformType.js),
            threadHook: threadHook, exceptionManager: exceptionManager);

  TextSizeServiceWorker.wasm(this.logger, this.sizeService,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger, sizeService],
        super($TextSizeServiceActivator(SquadronPlatformType.wasm),
            threadHook: threadHook, exceptionManager: exceptionManager);

  final _$localWorkers = <LocalWorker?>[null, null];
  final List _$startReq;

  @override
  List? getStartArgs() {
    final p0 = _$startReq[0];
    if (p0 is ILoggingService) {
      _$startReq[0] =
          (_$localWorkers[0] = p0.getLocalWorker()).channel?.serialize();
    }
    final p1 = _$startReq[1];
    if (p1 is ILocalSize) {
      _$startReq[1] =
          (_$localWorkers[1] = p1.getLocalWorker()).channel?.serialize();
    }
    return _$startReq;
  }

  @override
  void stop() {
    _$localWorkers[0]?.stop();
    _$localWorkers[0] = null;
    _$startReq[0] = logger;
    _$localWorkers[1]?.stop();
    _$localWorkers[1] = null;
    _$startReq[1] = sizeService;
    super.stop();
  }

  @override
  final ILoggingService logger;

  @override
  final ILocalSize sizeService;
}

/// Worker pool for TextSizeService
base class TextSizeServiceWorkerPool extends WorkerPool<TextSizeServiceWorker>
    with _$TextSizeService$Facade
    implements TextSizeService {
  TextSizeServiceWorkerPool(this.logger, this.sizeService,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => TextSizeServiceWorker(
                logger, sizeService,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  TextSizeServiceWorkerPool.vm(this.logger, this.sizeService,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => TextSizeServiceWorker.vm(
                logger, sizeService,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  TextSizeServiceWorkerPool.js(this.logger, this.sizeService,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => TextSizeServiceWorker.js(
                logger, sizeService,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  TextSizeServiceWorkerPool.wasm(this.logger, this.sizeService,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => TextSizeServiceWorker.wasm(
                logger, sizeService,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  @override
  final ILoggingService logger;

  @override
  final ILocalSize sizeService;

  @override
  Future<String> doSomethingWithTexts(List<String> texts) =>
      execute((w) => w.doSomethingWithTexts(texts));
}

final class _$Deser extends MarshalingContext {
  _$Deser({super.contextAware});
  late final $0 = value<String>();
  late final $1 = list<String>($0);
  late final $2 = value<PlatformChannel>();
}
