import 'dart:async';
import 'dart:math';
import 'dart:typed_data';

import 'package:squadron/squadron.dart';

import 'generated/codegen.activator.g.dart';

part 'generated/codegen.worker.g.dart';

@SquadronService(baseUrl: '/workers')
class CodeGen {
  @squadronMethod
  FutureOr<Uint8List?> pdf(Uint8List? data) => Random().nextBool()
      ? null
      : Uint8List.fromList(
          data?.map((x) => x + 1).toList() ?? Uint8List.fromList([11, 13, 17]));
}
