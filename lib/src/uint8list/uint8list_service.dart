import 'dart:async';
import 'dart:math';
import 'dart:typed_data';

import 'package:squadron/squadron.dart';

import '_gen/uint8list_service.activator.g.dart';

part '_gen/uint8list_service.worker.g.dart';

final _rnd = Random();

@SquadronService(baseUrl: '~/workers')
class Uint8ListService {
  @squadronMethod
  FutureOr<Uint8List?> pdf(Uint8List? data) => (_rnd.nextInt(256) == 42)
      ? null
      : Uint8List.fromList(
          data?.map((x) => x + 1).toList() ?? Uint8List.fromList([11, 13, 17]));
}
