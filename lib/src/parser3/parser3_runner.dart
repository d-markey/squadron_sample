import 'package:squadron/squadron.dart';

import '../../main.dart';
import 'parser3_service.dart';

final _sw = Stopwatch()..start();

class ParseArguments {
  ParseArguments(this.parser, this.lines, this.token);

  final Parser3Service parser;
  final List<String> lines;
  final CancellationToken token;
}

const _oneSec = Duration(seconds: 1);

Future<List> parse(ParseArguments args) async {
  if (!Squadron.isInitialized) {
    // we're being called from a compute context
    initSquadron('compute');
  }

  final parser = args.parser;
  final lines = args.lines;
  final token = args.token;

  if (token.cancelled) return [];
  await Future.delayed(_oneSec);
  if (token.cancelled) return [];

  final pool = (parser is WorkerPool) ? (parser as WorkerPool) : null;

  _sw.reset();

  final signalValues = await parser.parse(lines, token);

  final elapsed = _sw.elapsedMilliseconds;

  Squadron.info(
      'DONE PARSING: total items = ${signalValues.length} in ${_sw.elapsed}, ${signalValues.length / elapsed} item/ms');
  Squadron.info('    first = ${signalValues.first}');
  Squadron.info('    last = ${signalValues.last}');

  if (pool != null) {
    Squadron.info('Pool stats');
    final stats = pool.fullStats.toList();
    for (var i = 0; i < stats.length; i++) {
      final stat = stats[i];
      Squadron.info(
          '    #$i ${stat.status} current = ${stat.workload} / total/max/errors = ${stat.totalWorkload}/${stat.maxWorkload}/${stat.totalErrors}');
    }
  }

  // just to see ticks start again
  await Future.delayed(_oneSec);

  return signalValues;
}
