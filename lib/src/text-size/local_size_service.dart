import 'dart:async';

import 'package:squadron/squadron.dart';

abstract class LocalSizeService implements WorkerService {
  FutureOr<Map> measure(String text, {int? maxLines});

  Stream<int> sequence(int count);

  static const measureCommand = 1;
  static const sequenceCommand = 2;
}

class LocalSizeClient extends LocalWorkerClient implements LocalSizeService {
  LocalSizeClient(Channel channel) : super(channel);

  @override
  Future<Map> measure(String text, {int? maxLines}) =>
      send(LocalSizeService.measureCommand, [text, maxLines]);

  @override
  Stream<int> sequence(int count) =>
      stream(LocalSizeService.sequenceCommand, [count]);
}
