import '../parser2_worker_pool.dart';
import 'parser2_worker.dart' as isolate;

Parser2Worker createWorker(int batchSize) =>
    Parser2Worker(isolate.start, args: [batchSize]);
