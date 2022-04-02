
import 'package:squadron/squadron.dart';

import 'src/pi-digits/pi_digits_worker_pool.dart';
import 'src/thumbnails/thumbnail_worker_pool.dart';

import 'src/text-size/my_worker_pool.dart';
import 'src/text-size/local_size_service.dart';
import 'src/text-size/local_size_service_impl.dart';

late final PiDigitsWorkerPool piDigitsWorkerPool = PiDigitsWorkerPool(const ConcurrencySettings(minWorkers: 8, maxWorkers: 8, maxParallel: 2));

late final ThumbnailWorkerPool thumbnailWorkerPool = ThumbnailWorkerPool(const ConcurrencySettings(minWorkers: 1, maxWorkers: 4, maxParallel: 2));

late final sizeService = LocalWorker<LocalSizeService>.create(LocalSizeServiceImpl());
late final MyWorkerPool myWorkerPool = MyWorkerPool(sizeService, const ConcurrencySettings(minWorkers: 1, maxWorkers: 4, maxParallel: 2));