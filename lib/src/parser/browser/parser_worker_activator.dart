import '../parser_worker_pool.dart' show ParserWorker;

ParserWorker createWorker() => ParserWorker('/workers/parser_worker.dart.js');
