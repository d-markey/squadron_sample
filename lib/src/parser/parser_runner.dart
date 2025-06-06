import 'package:cancelation_token/cancelation_token.dart';
import 'package:squadron/squadron.dart';

import '../_helpers/worker_status.dart';
import '../logging_service.dart';
import '../signal_value.dart';
import 'parser_service.dart';

final _sw = Stopwatch()..start();

class ParseArguments {
  ParseArguments(this.parser, this.lines, this.nbOfChunks, this.token);

  final ParserService parser;
  final List<String> lines;
  final int nbOfChunks;
  final CancelationToken token;
}

const _tenMs = Duration(milliseconds: 10);

Future<List> parse(ParseArguments args) async {
  final parser = args.parser;
  final lines = args.lines;
  final nbOfChunks = args.nbOfChunks;
  final token = args.token;

  if (token.isCanceled) return [];
  await Future.delayed(_tenMs);
  if (token.isCanceled) return [];

  final pool = (parser is WorkerPool) ? (parser as WorkerPool) : null;
  final linesPerBatch = lines.length ~/ nbOfChunks;

  _sw.reset();

  if (pool != null) {
    final concurrency = pool.concurrencySettings;
    mainLogger.log(
        '[$threadId] [M] START: lines = ${lines.length} / nb of chunks = $nbOfChunks / pool: ${concurrency.minWorkers}-${concurrency.maxWorkers} workers');
  } else {
    mainLogger.log(
        '[$threadId] [M] START: lines = ${lines.length} / nb of chunks = $nbOfChunks / no pool');
  }

  final futures = <Future<List>>[];

  // split & start parsing
  while (lines.length > linesPerBatch) {
    // take chunk
    final chunk = lines.sublist(0, linesPerBatch);
    lines.removeRange(0, linesPerBatch);
    // adjust chunk to next timestamp
    while (lines.isNotEmpty && !lines[0].startsWith('#')) {
      chunk.add(lines.removeAt(0));
    }
    // parse chunk
    mainLogger.log(
        '[$threadId] [M]    batch #${futures.length + 1} = ${chunk.length} lines');
    futures.add(parser.parse(chunk, token));
  }
  // parse last chunk
  if (lines.isNotEmpty) {
    mainLogger.log(
        '[$threadId] [M]    batch #${futures.length + 1} = ${lines.length} lines');
    futures.add(parser.parse(lines, token));
  }

  mainLogger.log(
      '[$threadId] [M] STARTED ${futures.length} FUTURES, WAITING FOR RESULTS...');

  final chunks = await Future.wait(futures);
  if (token.isCanceled) return [];

  mainLogger.log('[$threadId] [M] MERGING AND CONVERTING RESULTS');
  final signalValues = <SignalValue>[];
  for (var i = 0; i < chunks.length; i++) {
    final chunk = chunks[i];
    for (var j = 0; j < chunk.length; j += 3) {
      signalValues.add(SignalValue(chunk[j], chunk[j + 1], chunk[j + 2]));
    }
  }

  final elapsed = _sw.elapsedMilliseconds;

  mainLogger.log(
      '[$threadId] [M] DONE PARSING: total items = ${signalValues.length} in ${_sw.elapsed}, ${signalValues.length / elapsed} item/ms');
  mainLogger.log('[$threadId] [M]     first = ${signalValues.first}');
  mainLogger.log('[$threadId] [M]     last = ${signalValues.last}');

  if (pool != null) {
    mainLogger.log('[$threadId] [M] Pool stats');
    final stats = pool.fullStats.toList();
    for (var i = 0; i < stats.length; i++) {
      final stat = stats[i];
      mainLogger.log(
          '[$threadId] [M]     #$i ${stat.status} current = ${stat.workload} / total/max/errors = ${stat.totalWorkload}/${stat.maxWorkload}/${stat.totalErrors}');
    }
  }

  // just to see ticks start again
  await Future.delayed(_tenMs);

  return signalValues;
}
