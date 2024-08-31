// Isolate implementation (VM patform)

import 'package:squadron/squadron.dart';

import '../thumbnail_service.dart';

void start(WorkerRequest command) =>
    run((startRequest) => ThumbnailServiceImpl(), command);
