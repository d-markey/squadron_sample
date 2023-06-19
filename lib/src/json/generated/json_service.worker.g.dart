// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../json_service.dart';

// **************************************************************************
// Generator: WorkerGenerator 2.3.1
// **************************************************************************

/// Operations map for JsonService
mixin $JsonServiceOperations on WorkerService {
  Map<int, CommandHandler>? _operations;

  @override
  Map<int, CommandHandler> get operations {
    var ops = _operations;
    if (ops == null) {
      ops = {
        _$decodeId: (req) => (this as JsonService).decode(req.args[0]),
        _$hydrateId: (req) async => (const PersonMarshaller())
            .marshall((await (this as JsonService).hydrate(req.args[0])))
      };
      _operations = ops;
    }
    return ops;
  }

  static const int _$decodeId = 1;
  static const int _$hydrateId = 2;
}

/// Service initializer for JsonService
JsonService $JsonServiceInitializer(WorkerRequest startRequest) =>
    JsonService();

/// Worker for JsonService
class _JsonServiceWorker extends Worker implements JsonService {
  _JsonServiceWorker({PlatformWorkerHook? platformWorkerHook})
      : super($JsonServiceActivator, platformWorkerHook: platformWorkerHook);

  @override
  Future<dynamic> decode(String source) => send(
        $JsonServiceOperations._$decodeId,
        args: [source],
      );

  @override
  Future<Person> hydrate(String source) => send(
        $JsonServiceOperations._$hydrateId,
        args: [source],
      ).then(($res) => (const PersonMarshaller()).unmarshall($res));

  @override
  Map<int, CommandHandler>? _operations;

  final Object _detachToken = Object();
}

/// Finalizable worker wrapper for JsonService
class JsonServiceWorker implements _JsonServiceWorker {
  JsonServiceWorker({PlatformWorkerHook? platformWorkerHook})
      : _worker = _JsonServiceWorker(platformWorkerHook: platformWorkerHook) {
    _finalizer.attach(this, _worker, detach: _worker._detachToken);
  }

  final _JsonServiceWorker _worker;

  static final Finalizer<_JsonServiceWorker> _finalizer =
      Finalizer<_JsonServiceWorker>((w) {
    try {
      _finalizer.detach(w._detachToken);
      w.stop();
    } catch (ex) {
      // finalizers must not throw
    }
  });

  @override
  Future<dynamic> decode(String source) => _worker.decode(source);

  @override
  Future<Person> hydrate(String source) => _worker.hydrate(source);

  @override
  Map<int, CommandHandler>? _operations;

  @override
  Map<int, CommandHandler> get operations => WorkerService.noOperations;

  @override
  List get args => _worker.args;

  @override
  Channel? get channel => _worker.channel;

  @override
  Duration get idleTime => _worker.idleTime;

  @override
  bool get isStopped => _worker.isStopped;

  @override
  int get maxWorkload => _worker.maxWorkload;

  @override
  WorkerStat get stats => _worker.stats;

  @override
  String get status => _worker.status;

  @override
  int get totalErrors => _worker.totalErrors;

  @override
  int get totalWorkload => _worker.totalWorkload;

  @override
  Duration get upTime => _worker.upTime;

  @override
  String get workerId => _worker.workerId;

  @override
  int get workload => _worker.workload;

  @override
  PlatformWorkerHook? get platformWorkerHook => _worker.platformWorkerHook;

  @override
  Future<Channel> start() => _worker.start();

  @override
  void stop() => _worker.stop();

  @override
  Future<T> send<T>(int command,
          {List args = const [],
          CancellationToken? token,
          bool inspectRequest = false,
          bool inspectResponse = false}) =>
      _worker.send<T>(command,
          args: args,
          token: token,
          inspectRequest: inspectRequest,
          inspectResponse: inspectResponse);

  @override
  Stream<T> stream<T>(int command,
          {List args = const [],
          CancellationToken? token,
          bool inspectRequest = false,
          bool inspectResponse = false}) =>
      _worker.stream<T>(command,
          args: args,
          token: token,
          inspectRequest: inspectRequest,
          inspectResponse: inspectResponse);

  @override
  Object get _detachToken => _worker._detachToken;
}

/// Worker pool for JsonService
class _JsonServiceWorkerPool extends WorkerPool<JsonServiceWorker>
    implements JsonService {
  _JsonServiceWorkerPool(
      {ConcurrencySettings? concurrencySettings,
      PlatformWorkerHook? platformWorkerHook})
      : super(() => JsonServiceWorker(platformWorkerHook: platformWorkerHook),
            concurrencySettings: concurrencySettings);

  @override
  Future<dynamic> decode(String source) => execute(($w) => $w.decode(source));

  @override
  Future<Person> hydrate(String source) => execute(($w) => $w.hydrate(source));

  @override
  Map<int, CommandHandler>? _operations;

  final Object _detachToken = Object();
}

/// Finalizable worker pool wrapper for JsonService
class JsonServiceWorkerPool implements _JsonServiceWorkerPool {
  JsonServiceWorkerPool(
      {ConcurrencySettings? concurrencySettings,
      PlatformWorkerHook? platformWorkerHook})
      : _pool = _JsonServiceWorkerPool(
            concurrencySettings: concurrencySettings,
            platformWorkerHook: platformWorkerHook) {
    _finalizer.attach(this, _pool, detach: _pool._detachToken);
  }

  final _JsonServiceWorkerPool _pool;

  static final Finalizer<_JsonServiceWorkerPool> _finalizer =
      Finalizer<_JsonServiceWorkerPool>((p) {
    try {
      _finalizer.detach(p._detachToken);
      p.stop();
    } catch (ex) {
      // finalizers must not throw
    }
  });

  @override
  Future<dynamic> decode(String source) => _pool.decode(source);

  @override
  Future<Person> hydrate(String source) => _pool.hydrate(source);

  @override
  Map<int, CommandHandler>? _operations;

  @override
  Map<int, CommandHandler> get operations => WorkerService.noOperations;

  @override
  ConcurrencySettings get concurrencySettings => _pool.concurrencySettings;

  @override
  Iterable<WorkerStat> get fullStats => _pool.fullStats;

  @override
  int get maxConcurrency => _pool.maxConcurrency;

  @override
  int get maxParallel => _pool.maxParallel;

  @override
  int get maxSize => _pool.maxSize;

  @override
  int get maxWorkers => _pool.maxWorkers;

  @override
  int get maxWorkload => _pool.maxWorkload;

  @override
  int get minWorkers => _pool.minWorkers;

  @override
  int get pendingWorkload => _pool.pendingWorkload;

  @override
  int get size => _pool.size;

  @override
  Iterable<WorkerStat> get stats => _pool.stats;

  @override
  bool get stopped => _pool.stopped;

  @override
  int get totalErrors => _pool.totalErrors;

  @override
  int get totalWorkload => _pool.totalWorkload;

  @override
  int get workload => _pool.workload;

  @override
  void cancel([Task? task, String? message]) => _pool.cancel(task, message);

  @override
  FutureOr start() => _pool.start();

  @override
  int stop([bool Function(JsonServiceWorker worker)? predicate]) =>
      _pool.stop(predicate);

  @override
  Object registerWorkerPoolListener(
          void Function(JsonServiceWorker worker, bool removed) listener) =>
      _pool.registerWorkerPoolListener(listener);

  @override
  void unregisterWorkerPoolListener(
          {void Function(JsonServiceWorker worker, bool removed)? listener,
          Object? token}) =>
      _pool.unregisterWorkerPoolListener(listener: listener, token: token);

  @override
  Future<T> execute<T>(Future<T> Function(JsonServiceWorker worker) task,
          {PerfCounter? counter}) =>
      _pool.execute<T>(task, counter: counter);

  @override
  StreamTask<T> scheduleStream<T>(
          Stream<T> Function(JsonServiceWorker worker) task,
          {PerfCounter? counter}) =>
      _pool.scheduleStream<T>(task, counter: counter);

  @override
  ValueTask<T> scheduleTask<T>(
          Future<T> Function(JsonServiceWorker worker) task,
          {PerfCounter? counter}) =>
      _pool.scheduleTask<T>(task, counter: counter);

  @override
  Stream<T> stream<T>(Stream<T> Function(JsonServiceWorker worker) task,
          {PerfCounter? counter}) =>
      _pool.stream<T>(task, counter: counter);

  @override
  Object get _detachToken => _pool._detachToken;
}
