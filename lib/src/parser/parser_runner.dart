import 'package:squadron/squadron.dart';

import 'parser_service.dart';
import 'signal_value.dart';

final _sw = Stopwatch()..start();

const void Function(Object? object)? log = print;

class ParseArguments {
  ParseArguments(this.parser, this.lines, this.nbOfChunks);

  final ParserService parser;
  final List<String> lines;
  final int nbOfChunks;
}

const _oneSec = Duration(seconds: 1);

List<T> Function(List<T> list, List chunk) _flatten<T>(String name,
    {T Function(dynamic entry)? converter}) {
  return (list, chunk) {
    if (list.isEmpty) {
      log?.call('[${_sw.elapsed}]    start folding $name');
    }
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

  await Future.delayed(_oneSec);

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

  await Future.delayed(_oneSec);

  _sw.reset();

  log?.call('[${_sw.elapsed}] START PARSING');

  var futures = <Future<List<SignalValue>>>[];
  for (var i = 0; i < chunks.length; i++) {
    // streamParser() returns partial results so we use fold() to produce a single list
    // the items returned by streamParser() are 'raw' Map objects so we also convert these maps into SignalValues
    final future = parser.streamParser(chunks[i]).fold<List<SignalValue>>(
      <SignalValue>[],
      _flatten<SignalValue>(
        'chunk #$i (${chunks[i].length} lines)',
        converter: (data) => SignalValue.load(data),
      ),
    ).whenComplete(
        () => log?.call('[${_sw.elapsed}]    done folding chunk #$i'));
    futures.add(future);
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
  final list = (await Future.wait(futures)).fold(
    <SignalValue>[],
    _flatten<SignalValue>('consolidated list'),
  ).toList();

  log?.call('[${_sw.elapsed}] DONE PARSING: total items = ${list.length}');
  log?.call('[${_sw.elapsed}]    first: ${list.first}');
  log?.call('[${_sw.elapsed}]    last: ${list.last}');

  await Future.delayed(_oneSec);

  return list;
}
