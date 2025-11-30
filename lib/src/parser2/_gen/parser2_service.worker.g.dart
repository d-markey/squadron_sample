// GENERATED CODE - DO NOT MODIFY BY HAND
// dart format width=80

part of '../parser2_service.dart';

// **************************************************************************
// Generator: WorkerGenerator 9.0.0+1 (Squadron 7.4.0)
// **************************************************************************

// dart format width=80
/// Command ids used in operations map
const int _$parseId = 1;

/// WorkerService operations for Parser2Service
extension on Parser2Service {
  OperationsMap _$getOperations() => OperationsMap({
        _$parseId: ($req) {
          final Stream<List<dynamic>> $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = parse($dsr.$1($req.args[0]), $req.cancelToken);
          } finally {}
          return $res;
        },
      });
}

/// Invoker for Parser2Service, implements the public interface to invoke the
/// remote service.
mixin _$Parser2Service$Invoker on Invoker implements Parser2Service {
  @override
  Stream<List<dynamic>> parse(List<dynamic> lines, [CancelationToken? token]) {
    final Stream $res = stream(_$parseId, args: [lines], token: token);
    try {
      final $dsr = _$Deser(contextAware: false);
      return $res.map($dsr.$1);
    } finally {}
  }
}

/// Facade for Parser2Service, implements other details of the service unrelated to
/// invoking the remote service.
mixin _$Parser2Service$Facade implements Parser2Service {
  @override
  // ignore: unused_element
  int get _batchSize => throw UnimplementedError();
}

/// WorkerClient for Parser2Service
final class $Parser2Service$Client extends WorkerClient
    with _$Parser2Service$Invoker, _$Parser2Service$Facade
    implements Parser2Service {
  $Parser2Service$Client(PlatformChannel channelInfo)
      : super(Channel.deserialize(channelInfo)!);

  @override
  late final ILoggingService logger;
}

/// Local worker extension for Parser2Service
extension $Parser2ServiceLocalWorkerExt on Parser2Service {
  // Get a fresh local worker instance.
  LocalWorker<Parser2Service> getLocalWorker(
          [ExceptionManager? exceptionManager]) =>
      LocalWorker.create(this, _$getOperations(), exceptionManager);
}

/// WorkerService class for Parser2Service
class _$Parser2Service$WorkerService extends Parser2Service
    implements WorkerService {
  _$Parser2Service$WorkerService(super.logger, super.batchSize) : super();

  @override
  OperationsMap get operations => _$getOperations();
}

/// Service initializer for Parser2Service
WorkerService $Parser2ServiceInitializer(WorkerRequest $req) {
  final $dsr = _$Deser(contextAware: false);
  return _$Parser2Service$WorkerService(
      $ILoggingService$Client($dsr.$2($req.args[0])), $dsr.$3($req.args[1]));
}

/// Worker for Parser2Service
base class Parser2ServiceWorker extends Worker
    with _$Parser2Service$Invoker, _$Parser2Service$Facade
    implements Parser2Service {
  Parser2ServiceWorker(this.logger, int batchSize,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger, batchSize],
        super($Parser2ServiceActivator(Squadron.platformType),
            threadHook: threadHook, exceptionManager: exceptionManager);

  Parser2ServiceWorker.vm(this.logger, int batchSize,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger, batchSize],
        super($Parser2ServiceActivator(SquadronPlatformType.vm),
            threadHook: threadHook, exceptionManager: exceptionManager);

  Parser2ServiceWorker.js(this.logger, int batchSize,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger, batchSize],
        super($Parser2ServiceActivator(SquadronPlatformType.js),
            threadHook: threadHook, exceptionManager: exceptionManager);

  Parser2ServiceWorker.wasm(this.logger, int batchSize,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = [logger, batchSize],
        super($Parser2ServiceActivator(SquadronPlatformType.wasm),
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

/// Worker pool for Parser2Service
base class Parser2ServiceWorkerPool extends WorkerPool<Parser2ServiceWorker>
    with _$Parser2Service$Facade
    implements Parser2Service {
  Parser2ServiceWorkerPool(this.logger, int batchSize,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => Parser2ServiceWorker(
                logger, batchSize,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  Parser2ServiceWorkerPool.vm(this.logger, int batchSize,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => Parser2ServiceWorker.vm(
                logger, batchSize,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  Parser2ServiceWorkerPool.js(this.logger, int batchSize,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => Parser2ServiceWorker.js(
                logger, batchSize,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  Parser2ServiceWorkerPool.wasm(this.logger, int batchSize,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => Parser2ServiceWorker.wasm(
                logger, batchSize,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  @override
  final ILoggingService logger;

  @override
  Stream<List<dynamic>> parse(List<dynamic> lines, [CancelationToken? token]) =>
      stream((w) => w.parse(lines, token));
}

final class _$Deser extends MarshalingContext {
  _$Deser({super.contextAware});
  late final $0 = value<Object>();
  late final $1 = nlist<Object>($0);
  late final $2 = value<PlatformChannel>();
  late final $3 = value<int>();
}
