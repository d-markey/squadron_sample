import 'package:json_annotation/json_annotation.dart';

part 'address.g.dart';

@JsonSerializable()
class Address {
  Address(
      {required this.id,
      required this.line1,
      this.line2,
      required this.zip,
      required this.city,
      required this.country});

  int id;
  String line1;
  String? line2;
  String zip;
  String city;
  String country;

  factory Address.fromJson(Map<String, dynamic> json) =>
      _$AddressFromJson(json);

  Map<String, dynamic> toJson() => _$AddressToJson(this);
}
