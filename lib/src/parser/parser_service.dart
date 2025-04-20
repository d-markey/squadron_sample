import 'dart:async';

import 'package:cancelation_token/cancelation_token.dart';
import 'package:squadron/squadron.dart';

import '../logging_service.dart';
import '_gen/parser_service.activator.g.dart';

part '_gen/parser_service.worker.g.dart';

@SquadronService(baseUrl: '~/workers')
class ParserService {
  ParserService(@localWorker this.logger);

  final ILoggingService logger;

  static const _timeStampMarker = '#';

  // to avoid too much serialization/deserialization, use only List and Map (not List<T> nor Map<K, V>)
  // make sure these lists and maps contain only base types (string, bool, num)
  @squadronMethod
  Future<List> parse(List<String> lines, [CancelationToken? token]) async {
    final sw = Stopwatch()..start();
    // load first timestamp
    // note: we KNOW that items in 'lines' are strings, so we force 'line' to be a String
    var line = lines[0];
    if (!line.startsWith(_timeStampMarker)) {
      logger.log('[$threadId] [S] first line = $line');
      throw Exception('Invalid data');
    }
    int timeStamp = int.parse(line.substring(_timeStampMarker.length));

    var signalValues = [];
    for (var i = 1; i < lines.length; i++) {
      final cancelledException = token?.exception;
      if (cancelledException != null) throw cancelledException;

      line = lines[i];
      if (line.startsWith(_timeStampMarker)) {
        // new timestamp
        timeStamp = int.parse(line.substring(_timeStampMarker.length));
      } else {
        // new value change
        final data = line.split(' ');
        signalValues.addAll([timeStamp, data[1], num.parse(data[0])]);
      }
    }

    logger.log(
        '[$threadId] [S] [${sw.elapsed}] parsed ${lines.length} and extracted ${signalValues.length / 3} signal values');
    return signalValues;
  }
}
