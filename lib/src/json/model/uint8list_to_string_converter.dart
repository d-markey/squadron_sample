import 'dart:convert';
import 'dart:typed_data';

import 'package:json_annotation/json_annotation.dart';

class Uint8ListToStringConverter extends JsonConverter<Uint8List?, String?> {
  const Uint8ListToStringConverter() : super();

  @override
  Uint8List? fromJson(String? json) =>
      (json == null || json.isEmpty) ? null : base64Decode(json);

  @override
  String? toJson(Uint8List? object) =>
      (object == null || object.isEmpty) ? null : base64Encode(object);
}
