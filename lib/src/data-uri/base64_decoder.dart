import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:squadron/squadron_annotations.dart';
import 'package:squadron/squadron.dart';

import 'generated/base64_decoder.activator.g.dart';

part 'generated/base64_decoder.worker.g.dart';

@UseLogger(ParentSquadronLogger)
@SquadronService(baseUrl: '/workers')
class Base64Decoder {
  @SquadronMethod()
  Future<Uint8List> decode(String base64Data) async {
    Squadron.debug('Start decoding ${base64Data.length} bytes');
    final res = base64Decode(base64Data);
    Squadron.debug('Done, res = ${res.length} bytes');
    return res;
  }
}
