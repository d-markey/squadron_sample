// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../logging_service.dart';

// **************************************************************************
// Generator: WorkerGenerator 7.1.1 (Squadron 7.1.1)
// **************************************************************************

/// Command ids used in operations map
const int _$logId = 1;

/// WorkerService operations for ILoggingService
extension on ILoggingService {
  OperationsMap _$getOperations() => OperationsMap({
        _$logId: ($req) {
          final $dsr = _$Deser(contextAware: false);
          return log($dsr.$0($req.args[0]));
        },
      });
}

/// Invoker for ILoggingService, implements the public interface to invoke the
/// remote service.
mixin _$ILoggingService$Invoker on Invoker implements ILoggingService {
  @override
  Future<void> log(String text) => send(_$logId, args: [text]);
}

/// Facade for ILoggingService, implements other details of the service unrelated to
/// invoking the remote service.
mixin _$ILoggingService$Facade implements ILoggingService {}

/// Local worker extension for ILoggingService
extension $ILoggingServiceLocalWorkerExt on ILoggingService {
  // Get a fresh local worker instance.
  LocalWorker<ILoggingService> getLocalWorker(
          [ExceptionManager? exceptionManager]) =>
      LocalWorker.create(this, _$getOperations(), exceptionManager);
}

/// LocalWorkerClient for ILoggingService
final class $LocalILoggingServiceClient extends LocalWorkerClient
    with _$ILoggingService$Invoker, _$ILoggingService$Facade
    implements ILoggingService {
  $LocalILoggingServiceClient(PlatformChannel channelInfo)
      : super(Channel.deserialize(channelInfo)!);
}

final class _$Deser extends MarshalingContext {
  _$Deser({super.contextAware});
  late final $0 = value<String>();
}
