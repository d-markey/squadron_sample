// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../perf.dart';

// **************************************************************************
// Generator: WorkerGenerator 2.3.1
// **************************************************************************

/// Operations map for Perf
mixin $PerfOperations on WorkerService {
  Map<int, CommandHandler>? _operations;

  @override
  Map<int, CommandHandler> get operations {
    var ops = _operations;
    if (ops == null) {
      ops = {
        _$addId: (req) async => bigIntMarshaller.marshall((await (this as Perf)
            .add(bigIntMarshaller.unmarshall(req.args[0]),
                bigIntMarshaller.unmarshall(req.args[1])))),
        _$negateWithByteBufferInputId: (req) async => (await (this as Perf)
                .negateWithByteBufferInput(
                    intListAsBufferMarshaller.unmarshall(req.args[0])))
            .cast<int>(),
        _$negateWithByteBufferOutputId: (req) =>
            (this as Perf).negateWithByteBufferOutput(req.args[0].cast<int>()),
        _$negateWithJsonOutputId: (req) =>
            (this as Perf).negateWithJsonOutput(req.args[0].cast<int>()),
        _$negateWithListInputId: (req) async => (await (this as Perf)
                .negateWithListInput(
                    intListAsBufferMarshaller.unmarshall(req.args[0])))
            .cast<int>(),
        _$negateWithListOutputId: (req) async =>
            (await (this as Perf).negateWithListOutput(req.args[0].cast<int>()))
                .cast<int>(),
        _$negateWithStringInputId: (req) async => (await (this as Perf)
                .negateWithStringInput(
                    intListAsStringMarshaller.unmarshall(req.args[0])))
            .cast<int>(),
        _$sendGenericDataId: (req) async => personMarshaller.marshall(
            (await (this as Perf)
                .sendGenericData(GenericData<Person>.fromJson(req.args[0])))),
        _$sendGenericDataAsJsonId: (req) async => personMarshaller
            .marshall((await (this as Perf).sendGenericDataAsJson(req.args[0])))
      };
      _operations = ops;
    }
    return ops;
  }

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
Perf $PerfInitializer(WorkerRequest startRequest) =>
    Perf(PerfContext.fromJson(startRequest.args[0]));

/// Worker for Perf
class _PerfWorker extends Worker implements Perf {
  _PerfWorker(PerfContext context, {PlatformWorkerHook? platformWorkerHook})
      : super($PerfActivator,
            args: [context.toJson()], platformWorkerHook: platformWorkerHook);

  @override
  Future<BigInt> add(BigInt a, BigInt b) => send(
        $PerfOperations._$addId,
        args: [bigIntMarshaller.marshall(a), bigIntMarshaller.marshall(b)],
      ).then(($res) => bigIntMarshaller.unmarshall($res));

  @override
  Future<List<int>> negateWithByteBufferInput(List<int> data) => send(
        $PerfOperations._$negateWithByteBufferInputId,
        args: [intListAsBufferMarshaller.marshall(data)],
      ).then(($res) => $res.cast<int>());

  @override
  Future<ByteBuffer> negateWithByteBufferOutput(List<int> data) => send(
        $PerfOperations._$negateWithByteBufferOutputId,
        args: [data.cast<int>()],
      );

  @override
  Future<String> negateWithJsonOutput(List<int> data) => send(
        $PerfOperations._$negateWithJsonOutputId,
        args: [data.cast<int>()],
      );

  @override
  Future<List<int>> negateWithListInput(List<int> data) => send(
        $PerfOperations._$negateWithListInputId,
        args: [intListAsBufferMarshaller.marshall(data)],
      ).then(($res) => $res.cast<int>());

  @override
  Future<List<int>> negateWithListOutput(List<int> data) => send(
        $PerfOperations._$negateWithListOutputId,
        args: [data.cast<int>()],
      ).then(($res) => $res.cast<int>());

  @override
  Future<List<int>> negateWithStringInput(List<int> data) => send(
        $PerfOperations._$negateWithStringInputId,
        args: [intListAsStringMarshaller.marshall(data)],
      ).then(($res) => $res.cast<int>());

  @override
  Future<Person> sendGenericData(GenericData<Person> personData) => send(
        $PerfOperations._$sendGenericDataId,
        args: [personData.toJson()],
      ).then(($res) => personMarshaller.unmarshall($res));

  @override
  Future<Person> sendGenericDataAsJson(String json) => send(
        $PerfOperations._$sendGenericDataAsJsonId,
        args: [json],
      ).then(($res) => personMarshaller.unmarshall($res));

  @override
  Map<int, CommandHandler>? _operations;

  final Object _detachToken = Object();
}

/// Finalizable worker wrapper for Perf
class PerfWorker implements _PerfWorker {
  PerfWorker(PerfContext context, {PlatformWorkerHook? platformWorkerHook})
      : _worker = _PerfWorker(context, platformWorkerHook: platformWorkerHook) {
    _finalizer.attach(this, _worker, detach: _worker._detachToken);
  }

  final _PerfWorker _worker;

  static final Finalizer<_PerfWorker> _finalizer = Finalizer<_PerfWorker>((w) {
    try {
      _finalizer.detach(w._detachToken);
      w.stop();
    } catch (ex) {
      // finalizers must not throw
    }
  });

  @override
  Future<BigInt> add(BigInt a, BigInt b) => _worker.add(a, b);

  @override
  Future<List<int>> negateWithByteBufferInput(List<int> data) =>
      _worker.negateWithByteBufferInput(data);

  @override
  Future<ByteBuffer> negateWithByteBufferOutput(List<int> data) =>
      _worker.negateWithByteBufferOutput(data);

  @override
  Future<String> negateWithJsonOutput(List<int> data) =>
      _worker.negateWithJsonOutput(data);

  @override
  Future<List<int>> negateWithListInput(List<int> data) =>
      _worker.negateWithListInput(data);

  @override
  Future<List<int>> negateWithListOutput(List<int> data) =>
      _worker.negateWithListOutput(data);

  @override
  Future<List<int>> negateWithStringInput(List<int> data) =>
      _worker.negateWithStringInput(data);

  @override
  Future<Person> sendGenericData(GenericData<Person> personData) =>
      _worker.sendGenericData(personData);

  @override
  Future<Person> sendGenericDataAsJson(String json) =>
      _worker.sendGenericDataAsJson(json);

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

/// Worker pool for Perf
class _PerfWorkerPool extends WorkerPool<PerfWorker> implements Perf {
  _PerfWorkerPool(PerfContext context,
      {ConcurrencySettings? concurrencySettings,
      PlatformWorkerHook? platformWorkerHook})
      : super(() => PerfWorker(context, platformWorkerHook: platformWorkerHook),
            concurrencySettings: concurrencySettings);

  @override
  Future<BigInt> add(BigInt a, BigInt b) => execute(($w) => $w.add(a, b));

  @override
  Future<List<int>> negateWithByteBufferInput(List<int> data) =>
      execute(($w) => $w.negateWithByteBufferInput(data));

  @override
  Future<ByteBuffer> negateWithByteBufferOutput(List<int> data) =>
      execute(($w) => $w.negateWithByteBufferOutput(data));

  @override
  Future<String> negateWithJsonOutput(List<int> data) =>
      execute(($w) => $w.negateWithJsonOutput(data));

  @override
  Future<List<int>> negateWithListInput(List<int> data) =>
      execute(($w) => $w.negateWithListInput(data));

  @override
  Future<List<int>> negateWithListOutput(List<int> data) =>
      execute(($w) => $w.negateWithListOutput(data));

  @override
  Future<List<int>> negateWithStringInput(List<int> data) =>
      execute(($w) => $w.negateWithStringInput(data));

  @override
  Future<Person> sendGenericData(GenericData<Person> personData) =>
      execute(($w) => $w.sendGenericData(personData));

  @override
  Future<Person> sendGenericDataAsJson(String json) =>
      execute(($w) => $w.sendGenericDataAsJson(json));

  @override
  Map<int, CommandHandler>? _operations;

  final Object _detachToken = Object();
}

/// Finalizable worker pool wrapper for Perf
class PerfWorkerPool implements _PerfWorkerPool {
  PerfWorkerPool(PerfContext context,
      {ConcurrencySettings? concurrencySettings,
      PlatformWorkerHook? platformWorkerHook})
      : _pool = _PerfWorkerPool(context,
            concurrencySettings: concurrencySettings,
            platformWorkerHook: platformWorkerHook) {
    _finalizer.attach(this, _pool, detach: _pool._detachToken);
  }

  final _PerfWorkerPool _pool;

  static final Finalizer<_PerfWorkerPool> _finalizer =
      Finalizer<_PerfWorkerPool>((p) {
    try {
      _finalizer.detach(p._detachToken);
      p.stop();
    } catch (ex) {
      // finalizers must not throw
    }
  });

  @override
  Future<BigInt> add(BigInt a, BigInt b) => _pool.add(a, b);

  @override
  Future<List<int>> negateWithByteBufferInput(List<int> data) =>
      _pool.negateWithByteBufferInput(data);

  @override
  Future<ByteBuffer> negateWithByteBufferOutput(List<int> data) =>
      _pool.negateWithByteBufferOutput(data);

  @override
  Future<String> negateWithJsonOutput(List<int> data) =>
      _pool.negateWithJsonOutput(data);

  @override
  Future<List<int>> negateWithListInput(List<int> data) =>
      _pool.negateWithListInput(data);

  @override
  Future<List<int>> negateWithListOutput(List<int> data) =>
      _pool.negateWithListOutput(data);

  @override
  Future<List<int>> negateWithStringInput(List<int> data) =>
      _pool.negateWithStringInput(data);

  @override
  Future<Person> sendGenericData(GenericData<Person> personData) =>
      _pool.sendGenericData(personData);

  @override
  Future<Person> sendGenericDataAsJson(String json) =>
      _pool.sendGenericDataAsJson(json);

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
  int stop([bool Function(PerfWorker worker)? predicate]) =>
      _pool.stop(predicate);

  @override
  Object registerWorkerPoolListener(
          void Function(PerfWorker worker, bool removed) listener) =>
      _pool.registerWorkerPoolListener(listener);

  @override
  void unregisterWorkerPoolListener(
          {void Function(PerfWorker worker, bool removed)? listener,
          Object? token}) =>
      _pool.unregisterWorkerPoolListener(listener: listener, token: token);

  @override
  Future<T> execute<T>(Future<T> Function(PerfWorker worker) task,
          {PerfCounter? counter}) =>
      _pool.execute<T>(task, counter: counter);

  @override
  StreamTask<T> scheduleStream<T>(Stream<T> Function(PerfWorker worker) task,
          {PerfCounter? counter}) =>
      _pool.scheduleStream<T>(task, counter: counter);

  @override
  ValueTask<T> scheduleTask<T>(Future<T> Function(PerfWorker worker) task,
          {PerfCounter? counter}) =>
      _pool.scheduleTask<T>(task, counter: counter);

  @override
  Stream<T> stream<T>(Stream<T> Function(PerfWorker worker) task,
          {PerfCounter? counter}) =>
      _pool.stream<T>(task, counter: counter);

  @override
  Object get _detachToken => _pool._detachToken;
}
