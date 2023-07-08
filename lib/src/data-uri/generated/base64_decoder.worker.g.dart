// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../base64_decoder.dart';

// **************************************************************************
// Generator: WorkerGenerator 2.4.1
// **************************************************************************

/// WorkerService class for Base64Decoder
class _$Base64DecoderWorkerService extends Base64Decoder
    implements WorkerService {
  _$Base64DecoderWorkerService() : super();

  @override
  Map<int, CommandHandler> get operations => _operations;

  late final Map<int, CommandHandler> _operations = {
    _$decodeId: ($) => decode($.args[0])
  };

  static const int _$decodeId = 1;
}

/// Service initializer for Base64Decoder
WorkerService $Base64DecoderInitializer(WorkerRequest startRequest) =>
    _$Base64DecoderWorkerService();

/// Operations map for Base64Decoder
@Deprecated(
    'squadron_builder now supports "plain old Dart objects" as services. '
    'Services do not need to derive from WorkerService nor do they need to mix in '
    'with \$Base64DecoderOperations anymore.')
mixin $Base64DecoderOperations on WorkerService {
  @override
  // not needed anymore, generated for compatibility with previous versions of squadron_builder
  Map<int, CommandHandler> get operations => WorkerService.noOperations;
}

/// Worker for Base64Decoder
class _$Base64DecoderWorker extends Worker implements Base64Decoder {
  _$Base64DecoderWorker({PlatformWorkerHook? platformWorkerHook})
      : super($Base64DecoderActivator, platformWorkerHook: platformWorkerHook);

  @override
  Future<Uint8List> decode(String base64Data) =>
      send(_$Base64DecoderWorkerService._$decodeId, args: [base64Data]);

  final Object _detachToken = Object();
}

/// Finalizable worker wrapper for Base64Decoder
class Base64DecoderWorker implements _$Base64DecoderWorker {
  Base64DecoderWorker({PlatformWorkerHook? platformWorkerHook})
      : _$w = _$Base64DecoderWorker(platformWorkerHook: platformWorkerHook) {
    _finalizer.attach(this, _$w, detach: _$w._detachToken);
  }

  final _$Base64DecoderWorker _$w;

  static final Finalizer<_$Base64DecoderWorker> _finalizer =
      Finalizer<_$Base64DecoderWorker>((w) {
    try {
      _finalizer.detach(w._detachToken);
      w.stop();
    } catch (ex) {
      // finalizers must not throw
    }
  });

  @override
  Future<Uint8List> decode(String base64Data) => _$w.decode(base64Data);

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

/// Worker pool for Base64Decoder
class _$Base64DecoderWorkerPool extends WorkerPool<Base64DecoderWorker>
    implements Base64Decoder {
  _$Base64DecoderWorkerPool(
      {ConcurrencySettings? concurrencySettings,
      PlatformWorkerHook? platformWorkerHook})
      : super(() => Base64DecoderWorker(platformWorkerHook: platformWorkerHook),
            concurrencySettings: concurrencySettings);

  @override
  Future<Uint8List> decode(String base64Data) =>
      execute((w) => w.decode(base64Data));

  final Object _detachToken = Object();
}

/// Finalizable worker pool wrapper for Base64Decoder
class Base64DecoderWorkerPool implements _$Base64DecoderWorkerPool {
  Base64DecoderWorkerPool(
      {ConcurrencySettings? concurrencySettings,
      PlatformWorkerHook? platformWorkerHook})
      : _$p = _$Base64DecoderWorkerPool(
            concurrencySettings: concurrencySettings,
            platformWorkerHook: platformWorkerHook) {
    _finalizer.attach(this, _$p, detach: _$p._detachToken);
  }

  final _$Base64DecoderWorkerPool _$p;

  static final Finalizer<_$Base64DecoderWorkerPool> _finalizer =
      Finalizer<_$Base64DecoderWorkerPool>((p) {
    try {
      _finalizer.detach(p._detachToken);
      p.stop();
    } catch (ex) {
      // finalizers must not throw
    }
  });

  @override
  Future<Uint8List> decode(String base64Data) => _$p.decode(base64Data);

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
  int stop([bool Function(Base64DecoderWorker worker)? predicate]) =>
      _$p.stop(predicate);

  @override
  Object registerWorkerPoolListener(
          void Function(Base64DecoderWorker worker, bool removed) listener) =>
      _$p.registerWorkerPoolListener(listener);

  @override
  void unregisterWorkerPoolListener(
          {void Function(Base64DecoderWorker worker, bool removed)? listener,
          Object? token}) =>
      _$p.unregisterWorkerPoolListener(listener: listener, token: token);

  @override
  Future<T> execute<T>(Future<T> Function(Base64DecoderWorker worker) task,
          {PerfCounter? counter}) =>
      _$p.execute<T>(task, counter: counter);

  @override
  StreamTask<T> scheduleStream<T>(
          Stream<T> Function(Base64DecoderWorker worker) task,
          {PerfCounter? counter}) =>
      _$p.scheduleStream<T>(task, counter: counter);

  @override
  ValueTask<T> scheduleTask<T>(
          Future<T> Function(Base64DecoderWorker worker) task,
          {PerfCounter? counter}) =>
      _$p.scheduleTask<T>(task, counter: counter);

  @override
  Stream<T> stream<T>(Stream<T> Function(Base64DecoderWorker worker) task,
          {PerfCounter? counter}) =>
      _$p.stream<T>(task, counter: counter);

  @override
  Object get _detachToken => _$p._detachToken;

  @override
  Map<int, CommandHandler> get operations => WorkerService.noOperations;
}
