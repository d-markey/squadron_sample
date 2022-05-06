import 'package:squadron/squadron.dart';

import 'parser3_service.dart';

final _sw = Stopwatch()..start();

void _log(dynamic message) => Squadron.info(message);

const void Function(Object? object)? log = _log;

class ParseArguments {
  ParseArguments(this.parser, this.lines, this.token);

  final Parser3Service parser;
  final List<String> lines;
  final CancellationToken token;
}

const _oneSec = Duration(seconds: 1);

Future<List> parse(ParseArguments args) async {
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

  log?.call(
      'DONE PARSING: total items = ${signalValues.length} in ${_sw.elapsed}, ${signalValues.length / elapsed} item/ms');
  log?.call('    first = ${signalValues.first}');
  log?.call('    last = ${signalValues.last}');

  if (pool != null) {
    log?.call('Pool stats');
    final stats = pool.fullStats.toList();
    for (var i = 0; i < stats.length; i++) {
      final stat = stats[i];
      log?.call(
          '    #$i ${stat.status} current = ${stat.workload} / total/max/errors = ${stat.totalWorkload}/${stat.maxWorkload}/${stat.totalErrors}');
    }
  }

  // just to see ticks start again
  await Future.delayed(_oneSec);

  return signalValues;
}
