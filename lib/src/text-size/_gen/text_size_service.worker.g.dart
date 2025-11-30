// GENERATED CODE - DO NOT MODIFY BY HAND
// dart format width=80

part of '../text_size_service.dart';

// **************************************************************************
// Generator: WorkerGenerator 9.0.0+1 (Squadron 7.4.0)
// **************************************************************************

// dart format width=80
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

/// WorkerClient for TextSizeService
final class $TextSizeService$Client extends WorkerClient
    with _$TextSizeService$Invoker, _$TextSizeService$Facade
    implements TextSizeService {
  $TextSizeService$Client(PlatformChannel channelInfo)
      : super(Channel.deserialize(channelInfo)!);

  @override
  late final ILoggingService logger;
  @override
  late final ILocalSize sizeService;
}

/// Local worker extension for TextSizeService
extension $TextSizeServiceLocalWorkerExt on TextSizeService {
  // Get a fresh local worker instance.
  LocalWorker<TextSizeService> getLocalWorker(
          [ExceptionManager? exceptionManager]) =>
      LocalWorker.create(this, _$getOperations(), exceptionManager);
}

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
      $ILoggingService$Client($dsr.$2($req.args[0])),
      $ILocalSize$Client($dsr.$2($req.args[1])));
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

  final _$remote = <Channel?>[null, null];
  final List _$startReq;

  @override
  List? getStartArgs() {
    final p0 = _$startReq[0];
    if (p0 is Worker) {
      _$startReq[0] = (_$remote[0] ??= p0.getSharedChannel())?.serialize();
    } else if (p0 is ILoggingService) {
      _$startReq[0] =
          (_$remote[0] ??= p0.getLocalWorker().channel)?.serialize();
    }
    final p1 = _$startReq[1];
    if (p1 is Worker) {
      _$startReq[1] = (_$remote[1] ??= p1.getSharedChannel())?.serialize();
    } else if (p1 is ILocalSize) {
      _$startReq[1] =
          (_$remote[1] ??= p1.getLocalWorker().channel)?.serialize();
    }
    return _$startReq;
  }

  @override
  void stop() {
    _$remote[0]?.close();
    _$remote[0] = null;
    _$startReq[0] = logger;
    _$remote[1]?.close();
    _$remote[1] = null;
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
