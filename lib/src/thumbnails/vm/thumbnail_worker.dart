// Isolate implementation (VM patform)

import 'package:squadron/squadron_service.dart';

import '../thumbnail_service.dart';

void start(Map command) =>
    run((startRequest) => ThumbnailServiceImpl(), command);
