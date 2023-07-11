import 'dart:async';
import 'dart:convert';

import 'package:squadron/squadron_annotations.dart';
import 'package:squadron/squadron.dart';

import 'generated/base64_uri_data_decoder.activator.g.dart';
import 'binary_data_uri.dart';

part 'generated/base64_uri_data_decoder.worker.g.dart';

@UseLogger(ParentSquadronLogger)
@SquadronService(baseUrl: '/workers')
class Base64UriDataDecoder {
  @SquadronMethod()
  Future<BinaryUriData> decode(String base64Data,
      {String mimeType = 'application/octet-stream'}) async {
    Squadron.debug('Start decoding ${kb(base64Data.length)}');
    final bytes = base64Decode(base64Data);
    Squadron.debug('Done, res = ${kb(bytes.length)}');
    return BinaryUriData('data:$mimeType;base64,$base64Data', bytes,
        mimeType: mimeType);
  }

  static String kb(int bytes) {
    final units = ['bytes', 'Kib', 'Mib', 'Gib', 'Tib'];
    double size = bytes.toDouble();
    var unit = 0;
    while (size > 1024 && unit < units.length - 1) {
      unit++;
      size /= 1024;
    }
    return '${size.toStringAsFixed(1)} ${units[unit]}';
  }
}
