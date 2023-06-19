import 'dart:typed_data';

import 'package:json_annotation/json_annotation.dart';

class Uint8ListToListConverter extends JsonConverter<Uint8List?, List?> {
  const Uint8ListToListConverter() : super();

  @override
  Uint8List? fromJson(List? json) => (json == null || json.isEmpty)
      ? null
      : Uint8List.fromList(json.cast<int>());

  @override
  List? toJson(Uint8List? object) => object;
}
