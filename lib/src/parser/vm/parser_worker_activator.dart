import '../parser_worker_pool.dart' show ParserWorker;

import 'parser_worker.dart' as isolate;

ParserWorker createWorker() => ParserWorker(isolate.start);
