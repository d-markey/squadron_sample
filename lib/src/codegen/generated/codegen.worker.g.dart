// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../codegen.dart';

// **************************************************************************
// Generator: WorkerGenerator 2.4.1
// **************************************************************************

/// WorkerService class for CodeGen
class _$CodeGenWorkerService extends CodeGen implements WorkerService {
  _$CodeGenWorkerService() : super();

  @override
  Map<int, CommandHandler> get operations => _operations;

  late final Map<int, CommandHandler> _operations = {
    _$incId: ($) => inc($.args[0])
  };

  static const int _$incId = 1;
}

/// Service initializer for CodeGen
WorkerService $CodeGenInitializer(WorkerRequest startRequest) =>
    _$CodeGenWorkerService();

/// Operations map for CodeGen
@Deprecated(
    'squadron_builder now supports "plain old Dart objects" as services. '
    'Services do not need to derive from WorkerService nor do they need to mix in '
    'with \$CodeGenOperations anymore.')
mixin $CodeGenOperations on WorkerService {
  @override
  // not needed anymore, generated for compatibility with previous versions of squadron_builder
  Map<int, CommandHandler> get operations => WorkerService.noOperations;
}

/// Worker for CodeGen
class _$CodeGenWorker extends Worker implements CodeGen {
  _$CodeGenWorker({PlatformWorkerHook? platformWorkerHook})
      : super($CodeGenActivator, platformWorkerHook: platformWorkerHook);

  @override
  Future<int> inc(int n) => send(_$CodeGenWorkerService._$incId, args: [n]);

  final Object _detachToken = Object();
}

/// Finalizable worker wrapper for CodeGen
class CodeGenWorker implements _$CodeGenWorker {
  CodeGenWorker({PlatformWorkerHook? platformWorkerHook})
      : _$w = _$CodeGenWorker(platformWorkerHook: platformWorkerHook) {
    _finalizer.attach(this, _$w, detach: _$w._detachToken);
  }

  final _$CodeGenWorker _$w;

  static final Finalizer<_$CodeGenWorker> _finalizer =
      Finalizer<_$CodeGenWorker>((w) {
    try {
      _finalizer.detach(w._detachToken);
      w.stop();
    } catch (ex) {
      // finalizers must not throw
    }
  });

  @override
  Future<int> inc(int n) => _$w.inc(n);

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

/// Worker pool for CodeGen
class _$CodeGenWorkerPool extends WorkerPool<CodeGenWorker> implements CodeGen {
  _$CodeGenWorkerPool(
      {ConcurrencySettings? concurrencySettings,
      PlatformWorkerHook? platformWorkerHook})
      : super(() => CodeGenWorker(platformWorkerHook: platformWorkerHook),
            concurrencySettings: concurrencySettings);

  @override
  Future<int> inc(int n) => execute((w) => w.inc(n));

  final Object _detachToken = Object();
}

/// Finalizable worker pool wrapper for CodeGen
class CodeGenWorkerPool implements _$CodeGenWorkerPool {
  CodeGenWorkerPool(
      {ConcurrencySettings? concurrencySettings,
      PlatformWorkerHook? platformWorkerHook})
      : _$p = _$CodeGenWorkerPool(
            concurrencySettings: concurrencySettings,
            platformWorkerHook: platformWorkerHook) {
    _finalizer.attach(this, _$p, detach: _$p._detachToken);
  }

  final _$CodeGenWorkerPool _$p;

  static final Finalizer<_$CodeGenWorkerPool> _finalizer =
      Finalizer<_$CodeGenWorkerPool>((p) {
    try {
      _finalizer.detach(p._detachToken);
      p.stop();
    } catch (ex) {
      // finalizers must not throw
    }
  });

  @override
  Future<int> inc(int n) => _$p.inc(n);

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
  int stop([bool Function(CodeGenWorker worker)? predicate]) =>
      _$p.stop(predicate);

  @override
  Object registerWorkerPoolListener(
          void Function(CodeGenWorker worker, bool removed) listener) =>
      _$p.registerWorkerPoolListener(listener);

  @override
  void unregisterWorkerPoolListener(
          {void Function(CodeGenWorker worker, bool removed)? listener,
          Object? token}) =>
      _$p.unregisterWorkerPoolListener(listener: listener, token: token);

  @override
  Future<T> execute<T>(Future<T> Function(CodeGenWorker worker) task,
          {PerfCounter? counter}) =>
      _$p.execute<T>(task, counter: counter);

  @override
  StreamTask<T> scheduleStream<T>(Stream<T> Function(CodeGenWorker worker) task,
          {PerfCounter? counter}) =>
      _$p.scheduleStream<T>(task, counter: counter);

  @override
  ValueTask<T> scheduleTask<T>(Future<T> Function(CodeGenWorker worker) task,
          {PerfCounter? counter}) =>
      _$p.scheduleTask<T>(task, counter: counter);

  @override
  Stream<T> stream<T>(Stream<T> Function(CodeGenWorker worker) task,
          {PerfCounter? counter}) =>
      _$p.stream<T>(task, counter: counter);

  @override
  Object get _detachToken => _$p._detachToken;

  @override
  Map<int, CommandHandler> get operations => WorkerService.noOperations;
}
