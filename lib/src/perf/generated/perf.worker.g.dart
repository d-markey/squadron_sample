// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../perf.dart';

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

/// Command ids used in operations map
const int _$addId = 1;
const int _$inspectId = 2;
const int _$negateWithByteBufferInputId = 3;
const int _$negateWithByteBufferOutputId = 4;
const int _$negateWithJsonOutputId = 5;
const int _$negateWithListInputId = 6;
const int _$negateWithListOutputId = 7;
const int _$negateWithStringInputId = 8;
const int _$noInspectId = 9;
const int _$sendGenericDataId = 10;
const int _$sendGenericDataAsJsonId = 11;

/// WorkerService operations for Perf
extension on Perf {
  OperationsMap _$getOperations() => OperationsMap({
        _$addId: ($req) async {
          final BigInt $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = await add($dsr.$0($req.args[0]), $dsr.$0($req.args[1]));
          } finally {}
          return $res;
        },
        _$inspectId: ($req) async {
          final Map<String, dynamic> $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = await inspect($dsr.$3($req.args[0]));
          } finally {}
          return $res;
        },
        _$negateWithByteBufferInputId: ($req) async {
          final List<int> $res;
          try {
            final $dsr = _$Deser(contextAware: true);
            $res = await negateWithByteBufferInput($dsr.$4($req.args[0]));
          } finally {}
          return $res;
        },
        _$negateWithByteBufferOutputId: ($req) async {
          final ByteBuffer $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = await negateWithByteBufferOutput($dsr.$6($req.args[0]));
          } finally {}
          return $res;
        },
        _$negateWithJsonOutputId: ($req) async {
          final String $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = await negateWithJsonOutput($dsr.$6($req.args[0]));
          } finally {}
          return $res;
        },
        _$negateWithListInputId: ($req) async {
          final List<int> $res;
          try {
            final $dsr = _$Deser(contextAware: true);
            $res = await negateWithListInput($dsr.$4($req.args[0]));
          } finally {}
          return $res;
        },
        _$negateWithListOutputId: ($req) async {
          final List<int> $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = await negateWithListOutput($dsr.$6($req.args[0]));
          } finally {}
          return $res;
        },
        _$negateWithStringInputId: ($req) async {
          final List<int> $res;
          try {
            final $dsr = _$Deser(contextAware: true);
            $res = await negateWithStringInput($dsr.$7($req.args[0]));
          } finally {}
          return $res;
        },
        _$noInspectId: ($req) async {
          final Map<String, dynamic> $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = await noInspect($dsr.$3($req.args[0]));
          } finally {}
          return $res;
        },
        _$sendGenericDataId: ($req) async {
          final Person $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = await sendGenericData($dsr.$8($req.args[0]));
          } finally {}
          try {
            final $sr = _$Ser(contextAware: true);
            return $sr.$0($res);
          } finally {}
        },
        _$sendGenericDataAsJsonId: ($req) async {
          final Person $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = await sendGenericDataAsJson($dsr.$1($req.args[0]));
          } finally {}
          try {
            final $sr = _$Ser(contextAware: true);
            return $sr.$0($res);
          } finally {}
        },
      });
}

/// Invoker for Perf, implements the public interface to invoke the
/// remote service.
mixin _$Perf$Invoker on Invoker implements Perf {
  @override
  Future<BigInt> add(BigInt a, BigInt b) async {
    final dynamic $res = await send(_$addId, args: [a, b]);
    try {
      final $dsr = _$Deser(contextAware: false);
      return $dsr.$0($res);
    } finally {}
  }

  @override
  Future<Map<String, dynamic>> inspect(Map<String, dynamic> data) async {
    final dynamic $res = await send(_$inspectId,
        args: [data], inspectRequest: true, inspectResponse: true);
    try {
      final $dsr = _$Deser(contextAware: false);
      return $dsr.$3($res);
    } finally {}
  }

  @override
  Future<List<int>> negateWithByteBufferInput(List<int> data) async {
    final dynamic $res;
    try {
      final $sr = _$Ser(contextAware: true);
      $res = await send(_$negateWithByteBufferInputId, args: [$sr.$1(data)]);
    } finally {}
    try {
      final $dsr = _$Deser(contextAware: false);
      return $dsr.$6($res);
    } finally {}
  }

  @override
  Future<ByteBuffer> negateWithByteBufferOutput(List<int> data) async {
    final dynamic $res =
        await send(_$negateWithByteBufferOutputId, args: [data]);
    try {
      final $dsr = _$Deser(contextAware: false);
      return $dsr.$9($res);
    } finally {}
  }

  @override
  Future<String> negateWithJsonOutput(List<int> data) async {
    final dynamic $res = await send(_$negateWithJsonOutputId, args: [data]);
    try {
      final $dsr = _$Deser(contextAware: false);
      return $dsr.$1($res);
    } finally {}
  }

  @override
  Future<List<int>> negateWithListInput(List<int> data) async {
    final dynamic $res;
    try {
      final $sr = _$Ser(contextAware: true);
      $res = await send(_$negateWithListInputId, args: [$sr.$1(data)]);
    } finally {}
    try {
      final $dsr = _$Deser(contextAware: false);
      return $dsr.$6($res);
    } finally {}
  }

  @override
  Future<List<int>> negateWithListOutput(List<int> data) async {
    final dynamic $res = await send(_$negateWithListOutputId, args: [data]);
    try {
      final $dsr = _$Deser(contextAware: false);
      return $dsr.$6($res);
    } finally {}
  }

  @override
  Future<List<int>> negateWithStringInput(List<int> data) async {
    final dynamic $res;
    try {
      final $sr = _$Ser(contextAware: true);
      $res = await send(_$negateWithStringInputId, args: [$sr.$2(data)]);
    } finally {}
    try {
      final $dsr = _$Deser(contextAware: false);
      return $dsr.$6($res);
    } finally {}
  }

  @override
  Future<Map<String, dynamic>> noInspect(Map<String, dynamic> data) async {
    final dynamic $res = await send(_$noInspectId, args: [data]);
    try {
      final $dsr = _$Deser(contextAware: false);
      return $dsr.$3($res);
    } finally {}
  }

  @override
  Future<Person> sendGenericData(GenericData<Person> personData) async {
    final dynamic $res;
    try {
      final $sr = _$Ser(contextAware: false);
      $res = await send(_$sendGenericDataId, args: [$sr.$3(personData)]);
    } finally {}
    try {
      final $dsr = _$Deser(contextAware: true);
      return $dsr.$10($res);
    } finally {}
  }

  @override
  Future<Person> sendGenericDataAsJson(String json) async {
    final dynamic $res = await send(_$sendGenericDataAsJsonId, args: [json]);
    try {
      final $dsr = _$Deser(contextAware: true);
      return $dsr.$10($res);
    } finally {}
  }
}

/// Facade for Perf, implements other details of the service unrelated to
/// invoking the remote service.
mixin _$Perf$Facade implements Perf {}

/// WorkerService class for Perf
class _$Perf$WorkerService extends Perf implements WorkerService {
  _$Perf$WorkerService(super.context) : super();

  @override
  OperationsMap get operations => _$getOperations();
}

/// Service initializer for Perf
WorkerService $PerfInitializer(WorkerRequest $req) {
  final $dsr = _$Deser(contextAware: false);
  return _$Perf$WorkerService($dsr.$11($req.args[0]));
}

/// Worker for Perf
base class PerfWorker extends Worker
    with _$Perf$Invoker, _$Perf$Facade
    implements Perf {
  PerfWorker(PerfContext context,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = (() {
          final $sr = _$Ser(contextAware: false);
          return [$sr.$4(context)];
        })(),
        super($PerfActivator(Squadron.platformType),
            threadHook: threadHook, exceptionManager: exceptionManager);

  PerfWorker.vm(PerfContext context,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = (() {
          final $sr = _$Ser(contextAware: false);
          return [$sr.$4(context)];
        })(),
        super($PerfActivator(SquadronPlatformType.vm),
            threadHook: threadHook, exceptionManager: exceptionManager);

  PerfWorker.js(PerfContext context,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = (() {
          final $sr = _$Ser(contextAware: false);
          return [$sr.$4(context)];
        })(),
        super($PerfActivator(SquadronPlatformType.js),
            threadHook: threadHook, exceptionManager: exceptionManager);

  PerfWorker.wasm(PerfContext context,
      {PlatformThreadHook? threadHook, ExceptionManager? exceptionManager})
      : _$startReq = (() {
          final $sr = _$Ser(contextAware: false);
          return [$sr.$4(context)];
        })(),
        super($PerfActivator(SquadronPlatformType.wasm),
            threadHook: threadHook, exceptionManager: exceptionManager);

  final List _$startReq;

  @override
  List? getStartArgs() => _$startReq;
}

/// Worker pool for Perf
base class PerfWorkerPool extends WorkerPool<PerfWorker>
    with _$Perf$Facade
    implements Perf {
  PerfWorkerPool(PerfContext context,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => PerfWorker(context,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  PerfWorkerPool.vm(PerfContext context,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => PerfWorker.vm(context,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  PerfWorkerPool.js(PerfContext context,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => PerfWorker.js(context,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  PerfWorkerPool.wasm(PerfContext context,
      {PlatformThreadHook? threadHook,
      ExceptionManager? exceptionManager,
      ConcurrencySettings? concurrencySettings})
      : super(
            (ExceptionManager exceptionManager) => PerfWorker.wasm(context,
                threadHook: threadHook, exceptionManager: exceptionManager),
            concurrencySettings: concurrencySettings,
            exceptionManager: exceptionManager);

  @override
  Future<BigInt> add(BigInt a, BigInt b) => execute((w) => w.add(a, b));

  @override
  Future<Map<String, dynamic>> inspect(Map<String, dynamic> data) =>
      execute((w) => w.inspect(data));

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
  Future<Map<String, dynamic>> noInspect(Map<String, dynamic> data) =>
      execute((w) => w.noInspect(data));

  @override
  Future<Person> sendGenericData(GenericData<Person> personData) =>
      execute((w) => w.sendGenericData(personData));

  @override
  Future<Person> sendGenericDataAsJson(String json) =>
      execute((w) => w.sendGenericDataAsJson(json));
}

final class _$Deser extends MarshalingContext {
  _$Deser({super.contextAware});
  late final $0 = value<BigInt>();
  late final $1 = value<String>();
  late final $2 = value<Object>();
  late final $3 = nmap<String, Object>(kcast: $1, vcast: $2);
  late final $4 = (($) => intListAsBufferMarshaler.unmarshal($, this));
  late final $5 = value<int>();
  late final $6 = list<int>($5);
  late final $7 = (($) => intListAsStringMarshaler.unmarshal($, this));
  late final $8 = (($) => GenericData<Person>.fromJson($));
  late final $9 = value<ByteBuffer>();
  late final $10 = (($) => personMarshaler.unmarshal($, this));
  late final $11 = (($) => PerfContext.fromJson($));
}

final class _$Ser extends MarshalingContext {
  _$Ser({super.contextAware});
  late final $0 = (($) => personMarshaler.marshal($, this));
  late final $1 = (($) => intListAsBufferMarshaler.marshal($, this));
  late final $2 = (($) => intListAsStringMarshaler.marshal($, this));
  late final $3 = (($) => ($ as GenericData<Person>).toJson());
  late final $4 = (($) => ($ as PerfContext).toJson());
}
