// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../perf.dart';

// **************************************************************************
// Generator: WorkerGenerator 6.0.0
// **************************************************************************

/// WorkerService class for Perf
class _$PerfWorkerService extends Perf implements WorkerService {
  _$PerfWorkerService(super.context) : super();

  @override
  Map<int, CommandHandler> get operations => _operations;

  late final Map<int, CommandHandler> _operations =
      Map.unmodifiable(<int, CommandHandler>{
    _$addId: ($in) async {
      final $out = await add(bigIntMarshaler.unmarshal($in.args[0]),
          bigIntMarshaler.unmarshal($in.args[1]));
      return bigIntMarshaler.marshal($out);
    },
    _$nativeId: ($in) async {
      final $out = await native(($in.args[0] as Map).cast<String, dynamic>());
      return ($out as Map);
    },
    _$native_inspectId: ($in) async {
      final $out =
          await native_inspect(($in.args[0] as Map).cast<String, dynamic>());
      return ($out as Map);
    },
    _$negateWithByteBufferInputId: ($in) => negateWithByteBufferInput(
        intListAsBufferMarshaler.unmarshal($in.args[0])),
    _$negateWithByteBufferOutputId: ($in) =>
        negateWithByteBufferOutput($in.args[0].cast<int>()),
    _$negateWithJsonOutputId: ($in) =>
        negateWithJsonOutput($in.args[0].cast<int>()),
    _$negateWithListInputId: ($in) =>
        negateWithListInput(intListAsBufferMarshaler.unmarshal($in.args[0])),
    _$negateWithListOutputId: ($in) =>
        negateWithListOutput($in.args[0].cast<int>()),
    _$negateWithStringInputId: ($in) =>
        negateWithStringInput(intListAsStringMarshaler.unmarshal($in.args[0])),
    _$sendGenericDataId: ($in) async {
      final $out =
          await sendGenericData(GenericData<Person>.fromJson($in.args[0]));
      return personMarshaler.marshal($out);
    },
    _$sendGenericDataAsJsonId: ($in) async {
      final $out = await sendGenericDataAsJson($in.args[0] as String);
      return personMarshaler.marshal($out);
    },
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
WorkerService $PerfInitializer(WorkerRequest $in) =>
    _$PerfWorkerService(PerfContext.fromJson($in.args[0]));

/// Worker for Perf
class PerfWorker extends Worker implements Perf {
  PerfWorker(PerfContext context, {PlatformThreadHook? threadHook})
      : super($PerfActivator, args: [context.toJson()], threadHook: threadHook);

  @override
  Future<BigInt> add(BigInt a, BigInt b) => send(_$PerfWorkerService._$addId,
          args: [bigIntMarshaler.marshal(a), bigIntMarshaler.marshal(b)])
      .then(($x) => bigIntMarshaler.unmarshal($x));

  @override
  Future<Map<String, dynamic>> native(Map<String, dynamic> data) =>
      send(_$PerfWorkerService._$nativeId, args: [(data as Map)])
          .then(($x) => ($x as Map).cast<String, dynamic>());

  @override
  Future<Map<String, dynamic>> native_inspect(Map<String, dynamic> data) =>
      send(_$PerfWorkerService._$native_inspectId,
              args: [(data as Map)],
              inspectRequest: true,
              inspectResponse: true)
          .then(($x) => ($x as Map).cast<String, dynamic>());

  @override
  Future<List<int>> negateWithByteBufferInput(List<int> data) =>
      send(_$PerfWorkerService._$negateWithByteBufferInputId,
          args: [intListAsBufferMarshaler.marshal(data)]);

  @override
  Future<ByteBuffer> negateWithByteBufferOutput(List<int> data) =>
      send(_$PerfWorkerService._$negateWithByteBufferOutputId, args: [data]);

  @override
  Future<String> negateWithJsonOutput(List<int> data) =>
      send(_$PerfWorkerService._$negateWithJsonOutputId, args: [data]);

  @override
  Future<List<int>> negateWithListInput(List<int> data) =>
      send(_$PerfWorkerService._$negateWithListInputId,
          args: [intListAsBufferMarshaler.marshal(data)]);

  @override
  Future<List<int>> negateWithListOutput(List<int> data) =>
      send(_$PerfWorkerService._$negateWithListOutputId, args: [data]);

  @override
  Future<List<int>> negateWithStringInput(List<int> data) =>
      send(_$PerfWorkerService._$negateWithStringInputId,
          args: [intListAsStringMarshaler.marshal(data)]);

  @override
  Future<Person> sendGenericData(GenericData<Person> personData) =>
      send(_$PerfWorkerService._$sendGenericDataId, args: [personData.toJson()])
          .then(($x) => personMarshaler.unmarshal($x));

  @override
  Future<Person> sendGenericDataAsJson(String json) =>
      send(_$PerfWorkerService._$sendGenericDataAsJsonId, args: [json])
          .then(($x) => personMarshaler.unmarshal($x));
}

/// Worker pool for Perf
class PerfWorkerPool extends WorkerPool<PerfWorker> implements Perf {
  PerfWorkerPool(PerfContext context,
      {ConcurrencySettings? concurrencySettings,
      PlatformThreadHook? threadHook})
      : super(() => PerfWorker(context, threadHook: threadHook),
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
