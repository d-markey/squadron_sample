import 'dart:async';

import 'package:squadron/squadron.dart';

abstract class LocalSizeService implements WorkerService {
  FutureOr<Map> measure(String text, {int? maxLines});

  static const measureCommand = 1;
}

class LocalSizeClient extends LocalWorkerClient implements LocalSizeService {
  LocalSizeClient(super.channel);

  @override
  Future<Map> measure(String text, {int? maxLines}) =>
      send(LocalSizeService.measureCommand, args: [text, maxLines]);
}
