// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../parser_service.dart';

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

/// Command ids used in operations map
const int _$parseId = 1;

/// WorkerService operations for ParserService
extension on ParserService {
  OperationsMap _$getOperations() => OperationsMap({
        _$parseId: ($req) async {
          final List<dynamic> $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = await parse($dsr.$1($req.args[0]), $req.cancelToken);
          } finally {}
          return $res;
        },
      });
}

/// Invoker for ParserService, implements the public interface to invoke the
/// remote service.
mixin _$ParserService$Invoker on Invoker implements ParserService {
  @override
  Future<List<dynamic>> parse(List<String> lines,
      [CancelationToken? token]) async {
    final dynamic $res = await send(_$parseId, args: [lines], token: token);
    try {
      final $dsr = _$Deser(contextAware: false);
      return $dsr.$3($res);
    } finally {}
  }
}

/// Facade for ParserService, implements other details of the service unrelated to
/// invoking the remote service.
mixin _$ParserService$Facade implements ParserService {}

/// WorkerService class for ParserService
class _$ParserService$WorkerService extends ParserService
    implements WorkerService {
  _$ParserService$WorkerService(super.logger) : super();

  @override
  OperationsMap get operations => _$getOperations();
}

/// Service initializer for ParserService
WorkerService $ParserServiceInitializer(WorkerRequest $req) {
  final $dsr = _$Deser(contextAware: false);
  return _$ParserService$WorkerService(
      $LocalILoggingServiceClient($dsr.$4($req.args[0])));
}

/// Worker for ParserService
base class ParserServiceWorker extends Worker
    with _$ParserService$Invoker, _$ParserService$Facade
    implements ParserService {
  ParserServiceWorker(this.logger,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger],
        super($ParserServiceActivator(Squadron.platformType),
            threadHook: threadHook, exceptionManager: exceptionManager);

  ParserServiceWorker.vm(this.logger,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger],
        super($ParserServiceActivator(SquadronPlatformType.vm),
            threadHook: threadHook, exceptionManager: exceptionManager);

  ParserServiceWorker.js(this.logger,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger],
        super($ParserServiceActivator(SquadronPlatformType.js),
            threadHook: threadHook, exceptionManager: exceptionManager);

  ParserServiceWorker.wasm(this.logger,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger],
        super($ParserServiceActivator(SquadronPlatformType.wasm),
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

/// Worker pool for ParserService
base class ParserServiceWorkerPool extends WorkerPool<ParserServiceWorker>
    with _$ParserService$Facade
    implements ParserService {
  ParserServiceWorkerPool(this.logger,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => ParserServiceWorker(logger,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  ParserServiceWorkerPool.vm(this.logger,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => ParserServiceWorker.vm(
                logger,
                threadHook: threadHook,
                exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  ParserServiceWorkerPool.js(this.logger,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => ParserServiceWorker.js(
                logger,
                threadHook: threadHook,
                exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  ParserServiceWorkerPool.wasm(this.logger,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => ParserServiceWorker.wasm(
                logger,
                threadHook: threadHook,
                exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  @override
  final ILoggingService logger;

  @override
  Future<List<dynamic>> parse(List<String> lines, [CancelationToken? token]) =>
      execute((w) => w.parse(lines, token));
}

final class _$Deser extends MarshalingContext {
  _$Deser({super.contextAware});
  late final $0 = value<String>();
  late final $1 = list<String>($0);
  late final $2 = value<Object>();
  late final $3 = nlist<Object>($2);
  late final $4 = value<PlatformChannel>();
}
