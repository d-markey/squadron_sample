// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../perf.dart';

// **************************************************************************
// Generator: WorkerGenerator 2.4.2
// **************************************************************************

/// WorkerService class for Perf
class _$PerfWorkerService extends Perf implements WorkerService {
  _$PerfWorkerService(PerfContext context) : super(context);

  @override
  Map<int, CommandHandler> get operations => _operations;

  late final Map<int, CommandHandler> _operations =
      Map.unmodifiable(<int, CommandHandler>{
    _$addId: ($) async => bigIntMarshaler.marshal((await add(
        bigIntMarshaler.unmarshal($.args[0]),
        bigIntMarshaler.unmarshal($.args[1])))),
    _$nativeId: ($) async => (await native($.args[0].cast<String, dynamic>()))
        .cast<String, dynamic>(),
    _$native_inspectId: ($) async =>
        (await native_inspect($.args[0].cast<String, dynamic>()))
            .cast<String, dynamic>(),
    _$negateWithByteBufferInputId: ($) async =>
        (await negateWithByteBufferInput(
                intListAsBufferMarshaler.unmarshal($.args[0])))
            .cast<int>(),
    _$negateWithByteBufferOutputId: ($) =>
        negateWithByteBufferOutput($.args[0].cast<int>()),
    _$negateWithJsonOutputId: ($) =>
        negateWithJsonOutput($.args[0].cast<int>()),
    _$negateWithListInputId: ($) async => (await negateWithListInput(
            intListAsBufferMarshaler.unmarshal($.args[0])))
        .cast<int>(),
    _$negateWithListOutputId: ($) async =>
        (await negateWithListOutput($.args[0].cast<int>())).cast<int>(),
    _$negateWithStringInputId: ($) async => (await negateWithStringInput(
            intListAsStringMarshaler.unmarshal($.args[0])))
        .cast<int>(),
    _$sendGenericDataId: ($) async => personMarshaler.marshal(
        (await sendGenericData(GenericData<Person>.fromJson($.args[0])))),
    _$sendGenericDataAsJsonId: ($) async =>
        personMarshaler.marshal((await sendGenericDataAsJson($.args[0]))),
  });

  static const int _$addId = 1;
  static const int _$nativeId = 2;
  static const int _$native_inspectId = 3;
  static const int _$negateWithByteBufferInputId = 4;
  static const int _$negateWithByteBufferOutputId = 5;
  static const int _$negateWithJsonOutputId = 6;
  static const int _$negateWithListInputId = 7;
  static const int _$negateWithListOutputId = 8;
  static const int _$negateWithStringInputId = 9;
  static const int _$sendGenericDataId = 10;
  static const int _$sendGenericDataAsJsonId = 11;
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
          args: [bigIntMarshaler.marshal(a), bigIntMarshaler.marshal(b)])
      .then((_) => bigIntMarshaler.unmarshal(_));

  @override
  Future<Map<String, dynamic>> native(Map<String, dynamic> data) =>
      send(_$PerfWorkerService._$nativeId, args: [data.cast<String, dynamic>()])
          .then((_) => _.cast<String, dynamic>());

  @override
  Future<Map<String, dynamic>> native_inspect(Map<String, dynamic> data) =>
      send(_$PerfWorkerService._$native_inspectId,
              args: [data.cast<String, dynamic>()],
              inspectRequest: true,
              inspectResponse: true)
          .then((_) => _.cast<String, dynamic>());

  @override
  Future<List<int>> negateWithByteBufferInput(List<int> data) =>
      send(_$PerfWorkerService._$negateWithByteBufferInputId,
              args: [intListAsBufferMarshaler.marshal(data)])
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
              args: [intListAsBufferMarshaler.marshal(data)])
          .then((_) => _.cast<int>());

  @override
  Future<List<int>> negateWithListOutput(List<int> data) =>
      send(_$PerfWorkerService._$negateWithListOutputId,
          args: [data.cast<int>()]).then((_) => _.cast<int>());

  @override
  Future<List<int>> negateWithStringInput(List<int> data) =>
      send(_$PerfWorkerService._$negateWithStringInputId,
              args: [intListAsStringMarshaler.marshal(data)])
          .then((_) => _.cast<int>());

  @override
  Future<Person> sendGenericData(GenericData<Person> personData) =>
      send(_$PerfWorkerService._$sendGenericDataId, args: [personData.toJson()])
          .then((_) => personMarshaler.unmarshal(_));

  @override
  Future<Person> sendGenericDataAsJson(String json) =>
      send(_$PerfWorkerService._$sendGenericDataAsJsonId, args: [json])
          .then((_) => personMarshaler.unmarshal(_));
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
  Future<Map<String, dynamic>> native(Map<String, dynamic> data) =>
      execute((w) => w.native(data));

  @override
  Future<Map<String, dynamic>> native_inspect(Map<String, dynamic> data) =>
      execute((w) => w.native_inspect(data));

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
