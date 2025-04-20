import 'dart:async';
import 'dart:typed_data';

import 'package:image/image.dart';
import 'package:squadron/squadron.dart';

import '_gen/thumbnail_service.activator.g.dart';

part '_gen/thumbnail_service.worker.g.dart';

@SquadronService(baseUrl: '~/workers')
class ThumbnailService {
  @squadronMethod
  FutureOr<Uint8List> getThumbnail(
      Uint8List imageData, int thumbWidth, int thumbHeight) {
    // implementation using the image package (https://pub.dev/packages/image)
    var image = decodeImage(imageData)!;
    var thumbnail = copyResize(image, width: thumbWidth, height: thumbHeight);
    return encodePng(thumbnail);
  }
}
