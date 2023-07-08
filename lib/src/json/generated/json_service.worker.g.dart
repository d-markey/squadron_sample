// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../json_service.dart';

// **************************************************************************
// Generator: WorkerGenerator 2.4.1
// **************************************************************************

/// WorkerService class for JsonService
class _$JsonServiceWorkerService extends JsonService implements WorkerService {
  _$JsonServiceWorkerService() : super();

  @override
  Map<int, CommandHandler> get operations => _operations;

  late final Map<int, CommandHandler> _operations = {
    _$decodeId: ($) => decode($.args[0]),
    _$hydrateId: ($) async =>
        (const PersonMarshaller()).marshall((await hydrate($.args[0])))
  };

  static const int _$decodeId = 1;
  static const int _$hydrateId = 2;
}

/// Service initializer for JsonService
WorkerService $JsonServiceInitializer(WorkerRequest startRequest) =>
    _$JsonServiceWorkerService();

/// Operations map for JsonService
@Deprecated(
    'squadron_builder now supports "plain old Dart objects" as services. '
    'Services do not need to derive from WorkerService nor do they need to mix in '
    'with \$JsonServiceOperations anymore.')
mixin $JsonServiceOperations on WorkerService {
  @override
  // not needed anymore, generated for compatibility with previous versions of squadron_builder
  Map<int, CommandHandler> get operations => WorkerService.noOperations;
}

/// Worker for JsonService
class _$JsonServiceWorker extends Worker implements JsonService {
  _$JsonServiceWorker({PlatformWorkerHook? platformWorkerHook})
      : super($JsonServiceActivator, platformWorkerHook: platformWorkerHook);

  @override
  Future<dynamic> decode(String source) =>
      send(_$JsonServiceWorkerService._$decodeId, args: [source]);

  @override
  Future<Person> hydrate(String source) =>
      send(_$JsonServiceWorkerService._$hydrateId, args: [source])
          .then((_) => (const PersonMarshaller()).unmarshall(_));

  final Object _detachToken = Object();
}

/// Finalizable worker wrapper for JsonService
class JsonServiceWorker implements _$JsonServiceWorker {
  JsonServiceWorker({PlatformWorkerHook? platformWorkerHook})
      : _$w = _$JsonServiceWorker(platformWorkerHook: platformWorkerHook) {
    _finalizer.attach(this, _$w, detach: _$w._detachToken);
  }

  final _$JsonServiceWorker _$w;

  static final Finalizer<_$JsonServiceWorker> _finalizer =
      Finalizer<_$JsonServiceWorker>((w) {
    try {
      _finalizer.detach(w._detachToken);
      w.stop();
    } catch (ex) {
      // finalizers must not throw
    }
  });

  @override
  Future<dynamic> decode(String source) => _$w.decode(source);

  @override
  Future<Person> hydrate(String source) => _$w.hydrate(source);

  @override
  List get args => _$w.args;

  @override
  Channel? get channel => _$w.channel;

  @override
  Duration get idleTime => _$w.idleTime;

  @override
  bool get isStopped => _$w.isStopped;

  @override
  int get maxWorkload => _$w.maxWorkload;

  @override
  WorkerStat get stats => _$w.stats;

  @override
  String get status => _$w.status;

  @override
  int get totalErrors => _$w.totalErrors;

  @override
  int get totalWorkload => _$w.totalWorkload;

  @override
  Duration get upTime => _$w.upTime;

  @override
  String get workerId => _$w.workerId;

  @override
  int get workload => _$w.workload;

  @override
  PlatformWorkerHook? get platformWorkerHook => _$w.platformWorkerHook;

  @override
  Future<Channel> start() => _$w.start();

  @override
  void stop() => _$w.stop();

  @override
  Future<T> send<T>(int command,
          {List args = const [],
          CancellationToken? token,
          bool inspectRequest = false,
          bool inspectResponse = false}) =>
      _$w.send<T>(command,
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
      _$w.stream<T>(command,
          args: args,
          token: token,
          inspectRequest: inspectRequest,
          inspectResponse: inspectResponse);

  @override
  Object get _detachToken => _$w._detachToken;

  @override
  Map<int, CommandHandler> get operations => WorkerService.noOperations;
}

/// Worker pool for JsonService
class _$JsonServiceWorkerPool extends WorkerPool<JsonServiceWorker>
    implements JsonService {
  _$JsonServiceWorkerPool(
      {ConcurrencySettings? concurrencySettings,
      PlatformWorkerHook? platformWorkerHook})
      : super(() => JsonServiceWorker(platformWorkerHook: platformWorkerHook),
            concurrencySettings: concurrencySettings);

  @override
  Future<dynamic> decode(String source) => execute((w) => w.decode(source));

  @override
  Future<Person> hydrate(String source) => execute((w) => w.hydrate(source));

  final Object _detachToken = Object();
}

/// Finalizable worker pool wrapper for JsonService
class JsonServiceWorkerPool implements _$JsonServiceWorkerPool {
  JsonServiceWorkerPool(
      {ConcurrencySettings? concurrencySettings,
      PlatformWorkerHook? platformWorkerHook})
      : _$p = _$JsonServiceWorkerPool(
            concurrencySettings: concurrencySettings,
            platformWorkerHook: platformWorkerHook) {
    _finalizer.attach(this, _$p, detach: _$p._detachToken);
  }

  final _$JsonServiceWorkerPool _$p;

  static final Finalizer<_$JsonServiceWorkerPool> _finalizer =
      Finalizer<_$JsonServiceWorkerPool>((p) {
    try {
      _finalizer.detach(p._detachToken);
      p.stop();
    } catch (ex) {
      // finalizers must not throw
    }
  });

  @override
  Future<dynamic> decode(String source) => _$p.decode(source);

  @override
  Future<Person> hydrate(String source) => _$p.hydrate(source);

  @override
  ConcurrencySettings get concurrencySettings => _$p.concurrencySettings;

  @override
  Iterable<WorkerStat> get fullStats => _$p.fullStats;

  @override
  int get maxConcurrency => _$p.maxConcurrency;

  @override
  int get maxParallel => _$p.maxParallel;

  @override
  int get maxSize => _$p.maxSize;

  @override
  int get maxWorkers => _$p.maxWorkers;

  @override
  int get maxWorkload => _$p.maxWorkload;

  @override
  int get minWorkers => _$p.minWorkers;

  @override
  int get pendingWorkload => _$p.pendingWorkload;

  @override
  int get size => _$p.size;

  @override
  Iterable<WorkerStat> get stats => _$p.stats;

  @override
  bool get stopped => _$p.stopped;

  @override
  int get totalErrors => _$p.totalErrors;

  @override
  int get totalWorkload => _$p.totalWorkload;

  @override
  int get workload => _$p.workload;

  @override
  void cancel([Task? task, String? message]) => _$p.cancel(task, message);

  @override
  FutureOr start() => _$p.start();

  @override
  int stop([bool Function(JsonServiceWorker worker)? predicate]) =>
      _$p.stop(predicate);

  @override
  Object registerWorkerPoolListener(
          void Function(JsonServiceWorker worker, bool removed) listener) =>
      _$p.registerWorkerPoolListener(listener);

  @override
  void unregisterWorkerPoolListener(
          {void Function(JsonServiceWorker worker, bool removed)? listener,
          Object? token}) =>
      _$p.unregisterWorkerPoolListener(listener: listener, token: token);

  @override
  Future<T> execute<T>(Future<T> Function(JsonServiceWorker worker) task,
          {PerfCounter? counter}) =>
      _$p.execute<T>(task, counter: counter);

  @override
  StreamTask<T> scheduleStream<T>(
          Stream<T> Function(JsonServiceWorker worker) task,
          {PerfCounter? counter}) =>
      _$p.scheduleStream<T>(task, counter: counter);

  @override
  ValueTask<T> scheduleTask<T>(
          Future<T> Function(JsonServiceWorker worker) task,
          {PerfCounter? counter}) =>
      _$p.scheduleTask<T>(task, counter: counter);

  @override
  Stream<T> stream<T>(Stream<T> Function(JsonServiceWorker worker) task,
          {PerfCounter? counter}) =>
      _$p.stream<T>(task, counter: counter);

  @override
  Object get _detachToken => _$p._detachToken;

  @override
  Map<int, CommandHandler> get operations => WorkerService.noOperations;
}
