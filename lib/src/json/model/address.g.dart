// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'address.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Address _$AddressFromJson(Map json) => Address(
      id: json['id'] as int,
      line1: json['line1'] as String,
      line2: json['line2'] as String?,
      zip: json['zip'] as String,
      city: json['city'] as String,
      country: json['country'] as String,
    );

Map<String, dynamic> _$AddressToJson(Address instance) => <String, dynamic>{
      'id': instance.id,
      'line1': instance.line1,
      'line2': instance.line2,
      'zip': instance.zip,
      'city': instance.city,
      'country': instance.country,
    };
