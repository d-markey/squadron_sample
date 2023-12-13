import 'dart:async';

import 'package:squadron/squadron.dart';

import '../signal_value.dart';

class Parser3Service {
  Parser3Service(this.maxDelayInMs);

  static const _timeStampMarker = '#';
  final int maxDelayInMs;

  Future<List<SignalValue>> parse(List<String> lines,
      [CancellationToken? token]) async {
    final sw = Stopwatch()..start();

    String line = lines[0];
    if (!line.startsWith(_timeStampMarker)) throw Exception('Invalid data');
    int timeStamp = int.parse(line.substring(_timeStampMarker.length));

    var signalValues = <SignalValue>[];
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
        signalValues.add(SignalValue(timeStamp, data[1], num.parse(data[0])));
      }

      if (sw.elapsedMilliseconds > maxDelayInMs) {
        // introducing this future will suspend parsing; pending UI events will
        // be processed and parsing will eventually resume
        await Future.delayed(Duration.zero);
        sw.reset();
      }
    }

    Squadron.info(
        '[${sw.elapsed}] parsed ${lines.length} and extracted ${signalValues.length} signal values');
    return signalValues;
  }
}
