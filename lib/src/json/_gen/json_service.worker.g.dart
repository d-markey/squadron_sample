// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../json_service.dart';

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

/// Command ids used in operations map
const int _$decodeId = 1;
const int _$hydrateId = 2;

/// WorkerService operations for JsonService
extension on JsonService {
  OperationsMap _$getOperations() => OperationsMap({
        _$decodeId: ($req) async {
          final dynamic $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = await decode($dsr.$0($req.args[0]));
          } finally {}
          return $res;
        },
        _$hydrateId: ($req) async {
          final Person $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = await hydrate($dsr.$0($req.args[0]));
          } finally {}
          try {
            final $sr = _$Ser(contextAware: true);
            return $sr.$0($res);
          } finally {}
        },
      });
}

/// Invoker for JsonService, implements the public interface to invoke the
/// remote service.
mixin _$JsonService$Invoker on Invoker implements JsonService {
  @override
  Future<dynamic> decode(String source) => send(_$decodeId, args: [source]);

  @override
  Future<Person> hydrate(String source) async {
    final dynamic $res = await send(_$hydrateId, args: [source]);
    try {
      final $dsr = _$Deser(contextAware: true);
      return $dsr.$3($res);
    } finally {}
  }
}

/// Facade for JsonService, implements other details of the service unrelated to
/// invoking the remote service.
mixin _$JsonService$Facade implements JsonService {}

/// WorkerService class for JsonService
class _$JsonService$WorkerService extends JsonService implements WorkerService {
  _$JsonService$WorkerService(super.logger) : super();

  @override
  OperationsMap get operations => _$getOperations();
}

/// Service initializer for JsonService
WorkerService $JsonServiceInitializer(WorkerRequest $req) {
  final $dsr = _$Deser(contextAware: false);
  return _$JsonService$WorkerService(
      $LocalILoggingServiceClient($dsr.$4($req.args[0])));
}

/// Worker for JsonService
base class JsonServiceWorker extends Worker
    with _$JsonService$Invoker, _$JsonService$Facade
    implements JsonService {
  JsonServiceWorker(this.logger,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger],
        super($JsonServiceActivator(Squadron.platformType),
            threadHook: threadHook, exceptionManager: exceptionManager);

  JsonServiceWorker.vm(this.logger,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger],
        super($JsonServiceActivator(SquadronPlatformType.vm),
            threadHook: threadHook, exceptionManager: exceptionManager);

  JsonServiceWorker.js(this.logger,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger],
        super($JsonServiceActivator(SquadronPlatformType.js),
            threadHook: threadHook, exceptionManager: exceptionManager);

  JsonServiceWorker.wasm(this.logger,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger],
        super($JsonServiceActivator(SquadronPlatformType.wasm),
            threadHook: threadHook, exceptionManager: exceptionManager);

  final _$localWorkers = <LocalWorker?>[null];
  final List _$startReq;

  @override
  List? getStartArgs() {
    final p0 = _$startReq[0];
    if (p0 is ILoggingService) {
      _$startReq[0] =
          (_$localWorkers[0] = p0.getLocalWorker()).channel?.serialize();
    }
    return _$startReq;
  }

  @override
  void stop() {
    _$localWorkers[0]?.stop();
    _$localWorkers[0] = null;
    _$startReq[0] = logger;
    super.stop();
  }

  @override
  final ILoggingService logger;
}

/// Worker pool for JsonService
base class JsonServiceWorkerPool extends WorkerPool<JsonServiceWorker>
    with _$JsonService$Facade
    implements JsonService {
  JsonServiceWorkerPool(this.logger,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => JsonServiceWorker(logger,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  JsonServiceWorkerPool.vm(this.logger,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => JsonServiceWorker.vm(logger,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  JsonServiceWorkerPool.js(this.logger,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => JsonServiceWorker.js(logger,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  JsonServiceWorkerPool.wasm(this.logger,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => JsonServiceWorker.wasm(
                logger,
                threadHook: threadHook,
                exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  @override
  final ILoggingService logger;

  @override
  Future<dynamic> decode(String source) => execute((w) => w.decode(source));

  @override
  Future<Person> hydrate(String source) => execute((w) => w.hydrate(source));
}

final class _$Deser extends MarshalingContext {
  _$Deser({super.contextAware});
  late final $0 = value<String>();
  late final $1 = value<Object>();
  late final $2 = nmap<Object, Object>(kcast: $1, vcast: $1);
  late final $3 = (($) => (const PersonMarshaler()).unmarshal($2($), this));
  late final $4 = value<PlatformChannel>();
}

final class _$Ser extends MarshalingContext {
  _$Ser({super.contextAware});
  late final $0 = (($) => (const PersonMarshaler()).marshal($, this));
}
