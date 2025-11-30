// GENERATED CODE - DO NOT MODIFY BY HAND
// dart format width=80

part of '../logging_service.dart';

// **************************************************************************
// Generator: WorkerGenerator 9.0.0+1 (Squadron 7.4.0)
// **************************************************************************

// dart format width=80
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

/// WorkerClient for ILoggingService
final class $ILoggingService$Client extends WorkerClient
    with _$ILoggingService$Invoker, _$ILoggingService$Facade
    implements ILoggingService {
  $ILoggingService$Client(PlatformChannel channelInfo)
      : super(Channel.deserialize(channelInfo)!);
}

/// Local worker extension for ILoggingService
extension $ILoggingServiceLocalWorkerExt on ILoggingService {
  // Get a fresh local worker instance.
  LocalWorker<ILoggingService> getLocalWorker(
          [ExceptionManager? exceptionManager]) =>
      LocalWorker.create(this, _$getOperations(), exceptionManager);
}

final class _$Deser extends MarshalingContext {
  _$Deser({super.contextAware});
  late final $0 = value<String>();
}
