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
class PerfWorker extends Worker implements Perf {
  PerfWorker(PerfContext context, {PlatformWorkerHook? platformWorkerHook})
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
}

/// Worker pool for Perf
class PerfWorkerPool extends WorkerPool<PerfWorker> implements Perf {
  PerfWorkerPool(PerfContext context,
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
}
