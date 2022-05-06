import '../parser_worker_pool.dart';
import 'parser_worker.dart' as isolate;

ParserWorker createWorker() => ParserWorker(isolate.start);
