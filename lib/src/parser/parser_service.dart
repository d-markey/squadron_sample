import 'package:squadron/squadron_service.dart';

class ParserService implements WorkerService {
  static const _timeStampMarker = '#';

  static const _batchSize = 1000;

  // to avoid too much serialization/deserialization, use only List and Map (not List<T> nor Map<K, V>)
  // make sure these lists and maps contain only base types (string, bool, num)
  Stream<List> streamParser(List lines, [CancellationToken? token]) async* {
    // load first timestamp
    // note: we KNOW that items in 'lines' are strings, so we force 'line' to be a String
    String line = lines.removeAt(0);
    if (!line.startsWith(_timeStampMarker)) throw Exception('Invalid data');
    int timeStamp = int.parse(line.substring(_timeStampMarker.length));

    var list = <Map<String, dynamic>>[];
    while (lines.isNotEmpty) {
      if (token != null && token.cancelled) return;
      // consume lines so they can be garbage collected (hopefully)
      line = lines.removeAt(0);
      if (line.startsWith(_timeStampMarker)) {
        // new timestamp
        timeStamp = int.parse(line.substring(_timeStampMarker.length));
      } else {
        // new value change
        final data = line.split(' ');
        list.add({'#': timeStamp, 'n': data[1], 'v': num.parse(data[0])});
      }
      // send batch of partial results
      if (list.length >= _batchSize) {
        yield list;
        // create a new list, so the previous one can be garbage collected (hopefully again!)
        list = <Map<String, dynamic>>[];
      }
    }
    // last batch
    if (list.isNotEmpty) {
      yield list;
    }
  }

  Stream<List> streamParserOptimized(List lines, [CancellationToken? token]) =>
      streamParser(lines, token);

  // command IDs
  static const streamCommand = 1;

  // command IDs --> command implementations
  @override
  Map<int, CommandHandler> get operations => {
        streamCommand: (r) => streamParser(r.args[0]),
      };
}
