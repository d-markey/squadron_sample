// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../perf.dart';

// **************************************************************************
// Generator: WorkerGenerator 2.4.1
// **************************************************************************

/// WorkerService class for Perf
class _$PerfWorkerService extends Perf implements WorkerService {
  _$PerfWorkerService(PerfContext context) : super(context);

  @override
  Map<int, CommandHandler> get operations => _operations;

  late final Map<int, CommandHandler> _operations = {
    _$addId: ($) async => bigIntMarshaller.marshall((await add(
        bigIntMarshaller.unmarshall($.args[0]),
        bigIntMarshaller.unmarshall($.args[1])))),
    _$negateWithByteBufferInputId: ($) async =>
        (await negateWithByteBufferInput(
                intListAsBufferMarshaller.unmarshall($.args[0])))
            .cast<int>(),
    _$negateWithByteBufferOutputId: ($) =>
        negateWithByteBufferOutput($.args[0].cast<int>()),
    _$negateWithJsonOutputId: ($) =>
        negateWithJsonOutput($.args[0].cast<int>()),
    _$negateWithListInputId: ($) async => (await negateWithListInput(
            intListAsBufferMarshaller.unmarshall($.args[0])))
        .cast<int>(),
    _$negateWithListOutputId: ($) async =>
        (await negateWithListOutput($.args[0].cast<int>())).cast<int>(),
    _$negateWithStringInputId: ($) async => (await negateWithStringInput(
            intListAsStringMarshaller.unmarshall($.args[0])))
        .cast<int>(),
    _$sendGenericDataId: ($) async => personMarshaller.marshall(
        (await sendGenericData(GenericData<Person>.fromJson($.args[0])))),
    _$sendGenericDataAsJsonId: ($) async =>
        personMarshaller.marshall((await sendGenericDataAsJson($.args[0])))
  };

  static const int _$addId = 1;
  static const int _$negateWithByteBufferInputId = 2;
  static const int _$negateWithByteBufferOutputId = 3;
  static const int _$negateWithJsonOutputId = 4;
  static const int _$negateWithListInputId = 5;
  static const int _$negateWithListOutputId = 6;
  static const int _$negateWithStringInputId = 7;
  static const int _$sendGenericDataId = 8;
  static const int _$sendGenericDataAsJsonId = 9;
}

/// Service initializer for Perf
WorkerService $PerfInitializer(WorkerRequest startRequest) =>
    _$PerfWorkerService(PerfContext.fromJson(startRequest.args[0]));

/// Operations map for Perf
@Deprecated(
    'squadron_builder now supports "plain old Dart objects" as services. '
    'Services do not need to derive from WorkerService nor do they need to mix in '
    'with \$PerfOperations anymore.')
mixin $PerfOperations on WorkerService {
  @override
  // not needed anymore, generated for compatibility with previous versions of squadron_builder
  Map<int, CommandHandler> get operations => WorkerService.noOperations;
}

/// Worker for Perf
class _$PerfWorker extends Worker implements Perf {
  _$PerfWorker(PerfContext context, {PlatformWorkerHook? platformWorkerHook})
      : super($PerfActivator,
            args: [context.toJson()], platformWorkerHook: platformWorkerHook);

  @override
  Future<BigInt> add(BigInt a, BigInt b) => send(_$PerfWorkerService._$addId,
          args: [bigIntMarshaller.marshall(a), bigIntMarshaller.marshall(b)])
      .then((_) => bigIntMarshaller.unmarshall(_));

  @override
  Future<List<int>> negateWithByteBufferInput(List<int> data) =>
      send(_$PerfWorkerService._$negateWithByteBufferInputId,
              args: [intListAsBufferMarshaller.marshall(data)])
          .then((_) => _.cast<int>());

  @override
  Future<ByteBuffer> negateWithByteBufferOutput(List<int> data) =>
      send(_$PerfWorkerService._$negateWithByteBufferOutputId,
          args: [data.cast<int>()]);

  @override
  Future<String> negateWithJsonOutput(List<int> data) =>
      send(_$PerfWorkerService._$negateWithJsonOutputId,
          args: [data.cast<int>()]);

  @override
  Future<List<int>> negateWithListInput(List<int> data) =>
      send(_$PerfWorkerService._$negateWithListInputId,
              args: [intListAsBufferMarshaller.marshall(data)])
          .then((_) => _.cast<int>());

  @override
  Future<List<int>> negateWithListOutput(List<int> data) =>
      send(_$PerfWorkerService._$negateWithListOutputId,
          args: [data.cast<int>()]).then((_) => _.cast<int>());

  @override
  Future<List<int>> negateWithStringInput(List<int> data) =>
      send(_$PerfWorkerService._$negateWithStringInputId,
              args: [intListAsStringMarshaller.marshall(data)])
          .then((_) => _.cast<int>());

  @override
  Future<Person> sendGenericData(GenericData<Person> personData) =>
      send(_$PerfWorkerService._$sendGenericDataId, args: [personData.toJson()])
          .then((_) => personMarshaller.unmarshall(_));

  @override
  Future<Person> sendGenericDataAsJson(String json) =>
      send(_$PerfWorkerService._$sendGenericDataAsJsonId, args: [json])
          .then((_) => personMarshaller.unmarshall(_));

  final Object _detachToken = Object();
}

/// Finalizable worker wrapper for Perf
class PerfWorker implements _$PerfWorker {
  PerfWorker(PerfContext context, {PlatformWorkerHook? platformWorkerHook})
      : _$w = _$PerfWorker(context, platformWorkerHook: platformWorkerHook) {
    _finalizer.attach(this, _$w, detach: _$w._detachToken);
  }

  final _$PerfWorker _$w;

  static final Finalizer<_$PerfWorker> _finalizer =
      Finalizer<_$PerfWorker>((w) {
    try {
      _finalizer.detach(w._detachToken);
      w.stop();
    } catch (ex) {
      // finalizers must not throw
    }
  });

  @override
  Future<BigInt> add(BigInt a, BigInt b) => _$w.add(a, b);

  @override
  Future<List<int>> negateWithByteBufferInput(List<int> data) =>
      _$w.negateWithByteBufferInput(data);

  @override
  Future<ByteBuffer> negateWithByteBufferOutput(List<int> data) =>
      _$w.negateWithByteBufferOutput(data);

  @override
  Future<String> negateWithJsonOutput(List<int> data) =>
      _$w.negateWithJsonOutput(data);

  @override
  Future<List<int>> negateWithListInput(List<int> data) =>
      _$w.negateWithListInput(data);

  @override
  Future<List<int>> negateWithListOutput(List<int> data) =>
      _$w.negateWithListOutput(data);

  @override
  Future<List<int>> negateWithStringInput(List<int> data) =>
      _$w.negateWithStringInput(data);

  @override
  Future<Person> sendGenericData(GenericData<Person> personData) =>
      _$w.sendGenericData(personData);

  @override
  Future<Person> sendGenericDataAsJson(String json) =>
      _$w.sendGenericDataAsJson(json);

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

/// Worker pool for Perf
class _$PerfWorkerPool extends WorkerPool<PerfWorker> implements Perf {
  _$PerfWorkerPool(PerfContext context,
      {ConcurrencySettings? concurrencySettings,
      PlatformWorkerHook? platformWorkerHook})
      : super(() => PerfWorker(context, platformWorkerHook: platformWorkerHook),
            concurrencySettings: concurrencySettings);

  @override
  Future<BigInt> add(BigInt a, BigInt b) => execute((w) => w.add(a, b));

  @override
  Future<List<int>> negateWithByteBufferInput(List<int> data) =>
      execute((w) => w.negateWithByteBufferInput(data));

  @override
  Future<ByteBuffer> negateWithByteBufferOutput(List<int> data) =>
      execute((w) => w.negateWithByteBufferOutput(data));

  @override
  Future<String> negateWithJsonOutput(List<int> data) =>
      execute((w) => w.negateWithJsonOutput(data));

  @override
  Future<List<int>> negateWithListInput(List<int> data) =>
      execute((w) => w.negateWithListInput(data));

  @override
  Future<List<int>> negateWithListOutput(List<int> data) =>
      execute((w) => w.negateWithListOutput(data));

  @override
  Future<List<int>> negateWithStringInput(List<int> data) =>
      execute((w) => w.negateWithStringInput(data));

  @override
  Future<Person> sendGenericData(GenericData<Person> personData) =>
      execute((w) => w.sendGenericData(personData));

  @override
  Future<Person> sendGenericDataAsJson(String json) =>
      execute((w) => w.sendGenericDataAsJson(json));

  final Object _detachToken = Object();
}

/// Finalizable worker pool wrapper for Perf
class PerfWorkerPool implements _$PerfWorkerPool {
  PerfWorkerPool(PerfContext context,
      {ConcurrencySettings? concurrencySettings,
      PlatformWorkerHook? platformWorkerHook})
      : _$p = _$PerfWorkerPool(context,
            concurrencySettings: concurrencySettings,
            platformWorkerHook: platformWorkerHook) {
    _finalizer.attach(this, _$p, detach: _$p._detachToken);
  }

  final _$PerfWorkerPool _$p;

  static final Finalizer<_$PerfWorkerPool> _finalizer =
      Finalizer<_$PerfWorkerPool>((p) {
    try {
      _finalizer.detach(p._detachToken);
      p.stop();
    } catch (ex) {
      // finalizers must not throw
    }
  });

  @override
  Future<BigInt> add(BigInt a, BigInt b) => _$p.add(a, b);

  @override
  Future<List<int>> negateWithByteBufferInput(List<int> data) =>
      _$p.negateWithByteBufferInput(data);

  @override
  Future<ByteBuffer> negateWithByteBufferOutput(List<int> data) =>
      _$p.negateWithByteBufferOutput(data);

  @override
  Future<String> negateWithJsonOutput(List<int> data) =>
      _$p.negateWithJsonOutput(data);

  @override
  Future<List<int>> negateWithListInput(List<int> data) =>
      _$p.negateWithListInput(data);

  @override
  Future<List<int>> negateWithListOutput(List<int> data) =>
      _$p.negateWithListOutput(data);

  @override
  Future<List<int>> negateWithStringInput(List<int> data) =>
      _$p.negateWithStringInput(data);

  @override
  Future<Person> sendGenericData(GenericData<Person> personData) =>
      _$p.sendGenericData(personData);

  @override
  Future<Person> sendGenericDataAsJson(String json) =>
      _$p.sendGenericDataAsJson(json);

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
  int stop([bool Function(PerfWorker worker)? predicate]) =>
      _$p.stop(predicate);

  @override
  Object registerWorkerPoolListener(
          void Function(PerfWorker worker, bool removed) listener) =>
      _$p.registerWorkerPoolListener(listener);

  @override
  void unregisterWorkerPoolListener(
          {void Function(PerfWorker worker, bool removed)? listener,
          Object? token}) =>
      _$p.unregisterWorkerPoolListener(listener: listener, token: token);

  @override
  Future<T> execute<T>(Future<T> Function(PerfWorker worker) task,
          {PerfCounter? counter}) =>
      _$p.execute<T>(task, counter: counter);

  @override
  StreamTask<T> scheduleStream<T>(Stream<T> Function(PerfWorker worker) task,
          {PerfCounter? counter}) =>
      _$p.scheduleStream<T>(task, counter: counter);

  @override
  ValueTask<T> scheduleTask<T>(Future<T> Function(PerfWorker worker) task,
          {PerfCounter? counter}) =>
      _$p.scheduleTask<T>(task, counter: counter);

  @override
  Stream<T> stream<T>(Stream<T> Function(PerfWorker worker) task,
          {PerfCounter? counter}) =>
      _$p.stream<T>(task, counter: counter);

  @override
  Object get _detachToken => _$p._detachToken;

  @override
  Map<int, CommandHandler> get operations => WorkerService.noOperations;
}
