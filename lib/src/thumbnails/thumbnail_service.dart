import 'dart:async';
import 'dart:typed_data';

import 'package:image/image.dart';

import 'package:squadron/squadron.dart';

// this abstract class represents the functionality you want to support in your service
//
// in this example, there is only one functionality: given an image represented by imageData,
// compute a thumbnail of size (thumbWidth, thumbHeight)
abstract class ThumbnailService {
  FutureOr<Uint8List> getThumbnail(
      Uint8List imageData, int thumbWidth, int thumbHeight);

  // this constant is used to identify the method to call when communicating with isolates / web workers
  static const getThumbnailCommand = 1;
}

// this class is the actual implementation of the service defined above
class ThumbnailServiceImpl implements ThumbnailService, WorkerService {
  @override
  FutureOr<Uint8List> getThumbnail(
      Uint8List imageData, int thumbWidth, int thumbHeight) {
    // implementation using the image package (https://pub.dev/packages/image)
    var image = decodeImage(imageData)!;
    var thumbnail = copyResize(image, width: thumbWidth, height: thumbHeight);
    return Uint8List.fromList(encodePng(thumbnail));
  }

  // this map creates the correspondance between the service constants from ThumbnailService
  // and the method implementations in ThumbnailServiceImpl
  @override
  late final Map<int, CommandHandler> operations = {
    ThumbnailService.getThumbnailCommand: (WorkerRequest r) =>
        getThumbnail(r.args[0], r.args[1], r.args[2])
  };
}
