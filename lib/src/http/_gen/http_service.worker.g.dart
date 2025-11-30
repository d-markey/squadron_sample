// GENERATED CODE - DO NOT MODIFY BY HAND
// dart format width=80

part of '../http_service.dart';

// **************************************************************************
// Generator: WorkerGenerator 9.0.0+1 (Squadron 7.4.0)
// **************************************************************************

// dart format width=80
/// Command ids used in operations map
const int _$getId = 1;

/// WorkerService operations for HttpService
extension on HttpService {
  OperationsMap _$getOperations() => OperationsMap({
        _$getId: ($req) async {
          final String $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = await get($dsr.$0($req.args[0]));
          } finally {}
          return $res;
        },
      });
}

/// Invoker for HttpService, implements the public interface to invoke the
/// remote service.
mixin _$HttpService$Invoker on Invoker implements HttpService {
  @override
  Future<String> get(String url) async {
    final dynamic $res = await send(_$getId, args: [url]);
    try {
      final $dsr = _$Deser(contextAware: false);
      return $dsr.$0($res);
    } finally {}
  }
}

/// Facade for HttpService, implements other details of the service unrelated to
/// invoking the remote service.
mixin _$HttpService$Facade implements HttpService {}

/// WorkerClient for HttpService
final class $HttpService$Client extends WorkerClient
    with _$HttpService$Invoker, _$HttpService$Facade
    implements HttpService {
  $HttpService$Client(PlatformChannel channelInfo)
      : super(Channel.deserialize(channelInfo)!);

  @override
  late final ILoggingService logger;
}

/// Local worker extension for HttpService
extension $HttpServiceLocalWorkerExt on HttpService {
  // Get a fresh local worker instance.
  LocalWorker<HttpService> getLocalWorker(
          [ExceptionManager? exceptionManager]) =>
      LocalWorker.create(this, _$getOperations(), exceptionManager);
}

/// WorkerService class for HttpService
class _$HttpService$WorkerService extends HttpService implements WorkerService {
  _$HttpService$WorkerService(super.logger) : super();

  @override
  OperationsMap get operations => _$getOperations();
}

/// Service initializer for HttpService
WorkerService $HttpServiceInitializer(WorkerRequest $req) {
  final $dsr = _$Deser(contextAware: false);
  return _$HttpService$WorkerService(
      $ILoggingService$Client($dsr.$1($req.args[0])));
}

/// Worker for HttpService
base class HttpServiceWorker extends Worker
    with _$HttpService$Invoker, _$HttpService$Facade
    implements HttpService {
  HttpServiceWorker(this.logger,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger],
        super($HttpServiceActivator(Squadron.platformType),
            threadHook: threadHook, exceptionManager: exceptionManager);

  HttpServiceWorker.vm(this.logger,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger],
        super($HttpServiceActivator(SquadronPlatformType.vm),
            threadHook: threadHook, exceptionManager: exceptionManager);

  HttpServiceWorker.js(this.logger,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger],
        super($HttpServiceActivator(SquadronPlatformType.js),
            threadHook: threadHook, exceptionManager: exceptionManager);

  HttpServiceWorker.wasm(this.logger,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger],
        super($HttpServiceActivator(SquadronPlatformType.wasm),
            threadHook: threadHook, exceptionManager: exceptionManager);

  final _$remote = <Channel?>[null];
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
    return _$startReq;
  }

  @override
  void stop() {
    _$remote[0]?.close();
    _$remote[0] = null;
    _$startReq[0] = logger;
    super.stop();
  }

  @override
  final ILoggingService logger;
}

/// Worker pool for HttpService
base class HttpServiceWorkerPool extends WorkerPool<HttpServiceWorker>
    with _$HttpService$Facade
    implements HttpService {
  HttpServiceWorkerPool(this.logger,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => HttpServiceWorker(logger,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  HttpServiceWorkerPool.vm(this.logger,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => HttpServiceWorker.vm(logger,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  HttpServiceWorkerPool.js(this.logger,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => HttpServiceWorker.js(logger,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  HttpServiceWorkerPool.wasm(this.logger,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => HttpServiceWorker.wasm(
                logger,
                threadHook: threadHook,
                exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  @override
  final ILoggingService logger;

  @override
  Future<String> get(String url) => execute((w) => w.get(url));
}

final class _$Deser extends MarshalingContext {
  _$Deser({super.contextAware});
  late final $0 = value<String>();
  late final $1 = value<PlatformChannel>();
}
