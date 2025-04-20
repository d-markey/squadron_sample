// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../pi_digits_service.dart';

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

/// Command ids used in operations map
const int _$getNDigitsId = 1;

/// WorkerService operations for PiDigitsService
extension on PiDigitsService {
  OperationsMap _$getOperations() => OperationsMap({
        _$getNDigitsId: ($req) {
          final Stream<int> $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = getNDigits(
                $dsr.$0($req.args[0]), $dsr.$0($req.args[1]), $req.cancelToken);
          } finally {}
          return $res;
        },
      });
}

/// Invoker for PiDigitsService, implements the public interface to invoke the
/// remote service.
mixin _$PiDigitsService$Invoker on Invoker implements PiDigitsService {
  @override
  Stream<int> getNDigits(int start, int n, CancelationToken? token) {
    final Stream $res = stream(_$getNDigitsId, args: [start, n], token: token);
    try {
      final $dsr = _$Deser(contextAware: false);
      return $res.map($dsr.$0);
    } finally {}
  }
}

/// Facade for PiDigitsService, implements other details of the service unrelated to
/// invoking the remote service.
mixin _$PiDigitsService$Facade implements PiDigitsService {
  @override
  int getNth(int n) => throw UnimplementedError();
}

/// WorkerService class for PiDigitsService
class _$PiDigitsService$WorkerService extends PiDigitsService
    implements WorkerService {
  _$PiDigitsService$WorkerService(super.logger) : super();

  @override
  OperationsMap get operations => _$getOperations();
}

/// Service initializer for PiDigitsService
WorkerService $PiDigitsServiceInitializer(WorkerRequest $req) {
  final $dsr = _$Deser(contextAware: false);
  return _$PiDigitsService$WorkerService(
      $LocalILoggingServiceClient($dsr.$1($req.args[0])));
}

/// Worker for PiDigitsService
base class PiDigitsServiceWorker extends Worker
    with _$PiDigitsService$Invoker, _$PiDigitsService$Facade
    implements PiDigitsService {
  PiDigitsServiceWorker(this.logger,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger],
        super($PiDigitsServiceActivator(Squadron.platformType),
            threadHook: threadHook, exceptionManager: exceptionManager);

  PiDigitsServiceWorker.vm(this.logger,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger],
        super($PiDigitsServiceActivator(SquadronPlatformType.vm),
            threadHook: threadHook, exceptionManager: exceptionManager);

  PiDigitsServiceWorker.js(this.logger,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger],
        super($PiDigitsServiceActivator(SquadronPlatformType.js),
            threadHook: threadHook, exceptionManager: exceptionManager);

  PiDigitsServiceWorker.wasm(this.logger,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger],
        super($PiDigitsServiceActivator(SquadronPlatformType.wasm),
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

/// Worker pool for PiDigitsService
base class PiDigitsServiceWorkerPool extends WorkerPool<PiDigitsServiceWorker>
    with _$PiDigitsService$Facade
    implements PiDigitsService {
  PiDigitsServiceWorkerPool(this.logger,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => PiDigitsServiceWorker(logger,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  PiDigitsServiceWorkerPool.vm(this.logger,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => PiDigitsServiceWorker.vm(
                logger,
                threadHook: threadHook,
                exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  PiDigitsServiceWorkerPool.js(this.logger,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => PiDigitsServiceWorker.js(
                logger,
                threadHook: threadHook,
                exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  PiDigitsServiceWorkerPool.wasm(this.logger,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => PiDigitsServiceWorker.wasm(
                logger,
                threadHook: threadHook,
                exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  @override
  final ILoggingService logger;

  @override
  Stream<int> getNDigits(int start, int n, CancelationToken? token) =>
      stream((w) => w.getNDigits(start, n, token));
}

final class _$Deser extends MarshalingContext {
  _$Deser({super.contextAware});
  late final $0 = value<int>();
  late final $1 = value<PlatformChannel>();
}
