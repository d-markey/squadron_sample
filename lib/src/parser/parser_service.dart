import 'dart:async';

import 'package:squadron/squadron.dart';

import '../../root_logger.dart';

class ParserService implements WorkerService {
  ParserService();

  static const _timeStampMarker = '#';

  // to avoid too much serialization/deserialization, use only List and Map (not List<T> nor Map<K, V>)
  // make sure these lists and maps contain only base types (string, bool, num)
  Future<List> parse(List lines, [CancelationToken? token]) async {
    final sw = Stopwatch()..start();
    // load first timestamp
    // note: we KNOW that items in 'lines' are strings, so we force 'line' to be a String
    String line = lines[0];
    if (!line.startsWith(_timeStampMarker)) throw Exception('Invalid data');
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

    rootLogger.i(
        '[${sw.elapsed}] parsed ${lines.length} and extracted ${signalValues.length / 3} signal values');
    return signalValues;
  }

  // command IDs
  static const parseCommand = 1;

  // command IDs --> command implementations
  @override
  Map<int, CommandHandler> get operations => {
        parseCommand: (r) {
          rootLogger.d('parse command received in ${r.travelTime} µs');
          return parse(r.args, r.cancelToken);
        },
      };
}
