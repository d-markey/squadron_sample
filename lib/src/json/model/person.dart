import 'dart:typed_data';

import 'package:json_annotation/json_annotation.dart';
import 'package:squadron/squadron_annotations.dart';

import '../marshallers/person_marshaller.dart';
import 'address.dart';
import 'uint8list_to_string_converter.dart';

part 'person.g.dart';

@JsonSerializable(explicitToJson: true)
@SerializeWith(PersonMarshaller)
class Person {
  Person(
      {required int id,
      required this.lastName,
      required this.firstName,
      this.dateOfBirth,
      List<Address>? addresses,
      this.jpgPhoto})
      : _id = id {
    if (addresses != null) {
      this.addresses.addAll(addresses);
    }
  }

  Person.create(
      {required this.lastName,
      required this.firstName,
      this.dateOfBirth,
      this.jpgPhoto})
      : _id = null;

  int? _id;

  int? get id => _id;
  String lastName;
  String firstName;
  DateTime? dateOfBirth;
  final addresses = <Address>[];

  @Uint8ListToStringConverter()
  // @Uint8ListToListConverter()
  Uint8List? jpgPhoto;

  factory Person.fromJson(Map json) => _$PersonFromJson(json);

  Map<String, dynamic> toJson() => _$PersonToJson(this);
}
