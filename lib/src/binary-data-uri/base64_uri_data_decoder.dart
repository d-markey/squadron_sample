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
    Squadron.debug('Start decoding ${base64Data.length} bytes');
    final bytes = base64Decode(base64Data);
    Squadron.debug('Done, res = ${bytes.length} bytes');
    return BinaryUriData(bytes, mimeType: mimeType);
  }
}
