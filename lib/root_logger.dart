import 'package:logger/logger.dart';
import 'package:squadron/squadron.dart';

final rootLogger = Logger(
  filter: ProductionFilter(),
  printer: SimplePrinterWithThreadId(),
  level: Level.all,
);

class SimplePrinterWithThreadId extends SimplePrinter {
  @override
  List<String> log(LogEvent event) =>
      super.log(event).map((l) => '[$threadId] $l').toList();
}

class SimpleDebugPrinter extends SimplePrinter {
  @override
  List<String> log(LogEvent event) =>
      super.log(event).map((l) => '[DEBUG] $l').toList();
}
