import 'package:squadron/squadron.dart';

import 'parser_service.dart';
import 'signal_value.dart';

final _sw = Stopwatch()..start();

const void Function(Object? object)? log = print;

class ParseArguments {
  ParseArguments(
      this.parser, this.lines, this.nbOfChunks, this.token, this.optimized);

  final ParserService parser;
  final List<String> lines;
  final int nbOfChunks;
  final CancellationToken token;
  final bool optimized;
}

const _oneSec = Duration(seconds: 1);

List<T> Function(List<T> list, List chunk) _flatten<T>(String name,
    {T Function(dynamic entry)? converter, required CancellationToken token}) {
  return (list, chunk) {
    if (list.isEmpty) {
      log?.call('[${_sw.elapsed}]    start folding $name');
    }
    if (token.cancelled) throw Exception('Cancelled');
    if (converter != null) {
      list.addAll(chunk.map(converter));
    } else {
      list.addAll(chunk.cast<T>());
    }
    return list;
  };
}

Future<List> parse(ParseArguments args) async {
  final parser = args.parser;
  final lines = args.lines;
  final nbOfChunks = args.nbOfChunks;
  final token = args.token;
  final optimized = args.optimized;

  if (token.cancelled) return [];
  await Future.delayed(_oneSec);
  if (token.cancelled) return [];

  _sw.reset();

  log?.call(
      '[${_sw.elapsed}] START SPLITTING CONTENT: lines = ${lines.length}');

  final linesPerBatch = lines.length ~/ nbOfChunks;
  final chunks = <List>[];
  while (lines.length > linesPerBatch) {
    // take chunk
    final part = lines.sublist(0, linesPerBatch);
    lines.removeRange(0, linesPerBatch);
    // adjust chunk to next timestamp
    while (lines.isNotEmpty && !lines[0].startsWith('#')) {
      part.add(lines.removeAt(0));
    }
    chunks.add(part);
  }
  // add last chunk
  if (lines.isNotEmpty) {
    chunks.add(lines);
  }

  log?.call(
      '[${_sw.elapsed}] DONE SPLITTING CONTENT: chunk lengths = ${chunks.map((p) => p.length).join(', ')}');

  if (token.cancelled) return [];
  await Future.delayed(_oneSec);
  if (token.cancelled) return [];

  _sw.reset();

  log?.call('[${_sw.elapsed}] START PARSING');

  final streamParser =
      optimized ? parser.streamParserOptimized : parser.streamParser;

  var futures = <Future<List<SignalValue>>>[];
  for (var i = 0; i < chunks.length; i++) {
    // streamParser() returns partial results so we use fold() to produce a single list
    // the items returned by streamParser() are 'raw' Map objects so we also convert these maps into SignalValues
    futures.add(
      streamParser(
        chunks[i],
        token,
      ).fold<List<SignalValue>>(
        <SignalValue>[],
        _flatten<SignalValue>(
          'chunk #$i (${chunks[i].length} lines)',
          converter: (data) => SignalValue.load(data),
          token: token,
        ),
      ).whenComplete(
        () => log?.call('[${_sw.elapsed}]    done folding chunk #$i'),
      ),
    );
  }

  if (parser is WorkerPool) {
    final concurrency = (parser as WorkerPool).concurrencySettings;
    log?.call(
        '[${_sw.elapsed}] STARTED ${futures.length} STREAMS WITH A POOL OF ${concurrency.minWorkers}-${concurrency.maxWorkers} WORKERS');
  } else {
    log?.call(
        '[${_sw.elapsed}] STARTED ${futures.length} STREAMS WITH NO POOL');
  }

  log?.call('[${_sw.elapsed}] WAITING FOR RESULTS');

  // each future will produce a partial List<SignalValue>
  // flatten these results to finally get a consolidated List<SignalValue>
  final results = await Future.wait(futures);
  if (token.cancelled) return [];

  final elapsed = _sw.elapsedMilliseconds;
  final total = results.fold<int>(
      0, (previousValue, element) => previousValue + element.length);

  log?.call('[${_sw.elapsed}] PARSING RATE: ${total / elapsed} value/ms');

  _sw.reset();

  log?.call('[${_sw.elapsed}] MERGING RESULTS');

  final list = results.fold(
    <SignalValue>[],
    _flatten<SignalValue>('consolidated list', token: token),
  ).toList();

  log?.call('[${_sw.elapsed}] DONE PARSING: total items = ${list.length}');
  log?.call('[${_sw.elapsed}]    first: ${list.first}');
  log?.call('[${_sw.elapsed}]    last: ${list.last}');

  await Future.delayed(_oneSec);

  return list;
}
