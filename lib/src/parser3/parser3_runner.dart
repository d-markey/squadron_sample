import 'package:cancelation_token/cancelation_token.dart';
import 'package:squadron/squadron.dart';

import '../../root_logger.dart';
import '../_helpers/worker_status.dart';
import 'parser3_service.dart';

final _sw = Stopwatch()..start();

class ParseArguments {
  ParseArguments(this.parser, this.lines, this.token);

  final Parser3Service parser;
  final List<String> lines;
  final CancelationToken token;
}

const _oneSec = Duration(seconds: 1);

Future<List> parse(ParseArguments args) async {
  final parser = args.parser;
  final lines = args.lines;
  final token = args.token;

  if (token.isCanceled) return [];
  await Future.delayed(_oneSec);
  if (token.isCanceled) return [];

  final pool = (parser is WorkerPool) ? (parser as WorkerPool) : null;

  _sw.reset();

  final signalValues = await parser.parse(lines, token);

  final elapsed = _sw.elapsedMilliseconds;

  rootLogger.i(
      'DONE PARSING: total items = ${signalValues.length} in ${_sw.elapsed}, ${signalValues.length / elapsed} item/ms');
  rootLogger.i('    first = ${signalValues.first}');
  rootLogger.i('    last = ${signalValues.last}');

  if (pool != null) {
    rootLogger.i('Pool stats');
    final stats = pool.fullStats.toList();
    for (var i = 0; i < stats.length; i++) {
      final stat = stats[i];
      rootLogger.i(
          '    #$i ${stat.status} current = ${stat.workload} / total/max/errors = ${stat.totalWorkload}/${stat.maxWorkload}/${stat.totalErrors}');
    }
  }

  // just to see ticks start again
  await Future.delayed(_oneSec);

  return signalValues;
}
