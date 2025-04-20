import 'dart:async';

import 'package:squadron/squadron.dart';

part '_gen/logging_service.worker.g.dart';

final mainLogger = LoggingService();

@localService
abstract class ILoggingService {
  @squadronMethod
  FutureOr<void> log(String text);
}

class LoggingService implements ILoggingService {
  void Function(String) _log = print;

  void setLogger(void Function(String) logger) {
    _log = logger;
  }

  @override
  void log(String text) => _log(text);
}
