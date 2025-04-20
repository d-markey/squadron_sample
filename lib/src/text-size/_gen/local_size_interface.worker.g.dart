// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../local_size_interface.dart';

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

/// Command ids used in operations map
const int _$measureId = 1;

/// WorkerService operations for ILocalSize
extension on ILocalSize {
  OperationsMap _$getOperations() => OperationsMap({
        _$measureId: ($req) async {
          final Map<String, double> $res;
          try {
            final $dsr = _$Deser(contextAware: false);
            $res = await measure($dsr.$0($req.args[0]),
                maxLines: $dsr.$2($req.args[1]));
          } finally {}
          return $res;
        },
      });
}

/// Invoker for ILocalSize, implements the public interface to invoke the
/// remote service.
mixin _$ILocalSize$Invoker on Invoker implements ILocalSize {
  @override
  Future<Map<String, double>> measure(String text, {int? maxLines}) async {
    final dynamic $res = await send(_$measureId, args: [text, maxLines]);
    try {
      final $dsr = _$Deser(contextAware: false);
      return $dsr.$4($res);
    } finally {}
  }
}

/// Facade for ILocalSize, implements other details of the service unrelated to
/// invoking the remote service.
mixin _$ILocalSize$Facade implements ILocalSize {}

/// Local worker extension for ILocalSize
extension $ILocalSizeLocalWorkerExt on ILocalSize {
  // Get a fresh local worker instance.
  LocalWorker<ILocalSize> getLocalWorker(
          [ExceptionManager? exceptionManager]) =>
      LocalWorker.create(this, _$getOperations(), exceptionManager);
}

/// LocalWorkerClient for ILocalSize
final class $LocalILocalSizeClient extends LocalWorkerClient
    with _$ILocalSize$Invoker, _$ILocalSize$Facade
    implements ILocalSize {
  $LocalILocalSizeClient(PlatformChannel channelInfo)
      : super(Channel.deserialize(channelInfo)!);
}

final class _$Deser extends MarshalingContext {
  _$Deser({super.contextAware});
  late final $0 = value<String>();
  late final $1 = value<int>();
  late final $2 = Converter.allowNull($1);
  late final $3 = value<double>();
  late final $4 = map<String, double>(kcast: $0, vcast: $3);
}
