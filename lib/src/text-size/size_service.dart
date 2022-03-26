import 'dart:async';

import 'package:squadron/squadron.dart';

abstract class SizeService implements WorkerService {
  FutureOr<Map> measure(String text, {int? maxLines});

  static const measureCommand = 1;
}

class SizeClient extends LocalWorkerClient implements SizeService {
  SizeClient(Channel channel) : super(channel);

  @override
  Future<Map> measure(String text, {int? maxLines}) =>
      send(SizeService.measureCommand, [text, maxLines]);
}
