import 'dart:async';

import 'package:squadron/squadron.dart';

abstract class LocalSizeService implements WorkerService {
  FutureOr<Map<String, double>> measure(String text, {int? maxLines});

  static const measureCommand = 1;
}

class LocalSizeClient extends LocalWorkerClient implements LocalSizeService {
  LocalSizeClient(super.channel);

  @override
  Future<Map<String, double>> measure(String text, {int? maxLines}) =>
      send(LocalSizeService.measureCommand,
              args: [text, Cast.toNullableInt(maxLines)])
          .then((res) => (res as Map).cast<String, double>());
}
