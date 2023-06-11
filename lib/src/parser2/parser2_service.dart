import 'dart:async';

import 'package:squadron/squadron_service.dart';

class Parser2Service implements WorkerService {
  Parser2Service(this._batchSize);

  static const _timeStampMarker = '#';

  final int _batchSize;

  static Map<String, dynamic> _register(
      List<Map<String, dynamic>> signals, int timeStamp) {
    var current = <String, dynamic>{};
    current['#'] = timeStamp;
    current['v'] = <String, num>{};
    signals.add(current);
    return current;
  }

  // to avoid too much serialization/deserialization, use only List and Map (not List<T> nor Map<K, V>)
  // make sure these lists and maps contain only base types (string, bool, num)
  Stream<List<dynamic>> parse(List lines, [CancellationToken? token]) async* {
    final sw = Stopwatch()..start();
    // load first timestamp
    // note: we KNOW that items in 'lines' are strings, so we force 'line' to be a String
    String line = lines[0];
    if (!line.startsWith(_timeStampMarker)) {
      Squadron.shout('first line = $line');
      throw Exception('Invalid data');
    }
    int timeStamp = int.parse(line.substring(_timeStampMarker.length));

    var signalValues = <Map<String, dynamic>>[];
    var current = _register(signalValues, timeStamp);
    var values = current['v'];

    for (var i = 1; i < lines.length; i++) {
      final cancelledException = token?.exception;
      if (cancelledException != null) throw cancelledException;

      line = lines[i];
      if (line.startsWith(_timeStampMarker)) {
        if (signalValues.length >= _batchSize) {
          yield signalValues;
          signalValues = <Map<String, dynamic>>[];
        }
        // new timestamp
        timeStamp = int.parse(line.substring(_timeStampMarker.length));
        current = _register(signalValues, timeStamp);
        values = current['v'];
      } else {
        // new value change
        final data = line.split(' ');
        values[data[1]] = num.parse(data[0]);
      }
    }

    if (signalValues.isNotEmpty) {
      yield signalValues;
    }

    Squadron.info('[${sw.elapsed}] parsed ${lines.length} lines');
  }

  // command IDs
  static const parseCommand = 1;

  // command IDs --> command implementations
  @override
  Map<int, CommandHandler> get operations => {
        parseCommand: (r) {
          Squadron.debug('parse command received in ${r.travelTime} µs');
          return parse(r.args, r.cancelToken);
        },
      };
}
