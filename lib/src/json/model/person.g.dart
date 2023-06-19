// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'person.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

Person _$PersonFromJson(Map json) => Person(
      id: json['id'] as int,
      lastName: json['last_name'] as String,
      firstName: json['first_name'] as String,
      dateOfBirth: json['date_of_birth'] == null
          ? null
          : DateTime.parse(json['date_of_birth'] as String),
      addresses: (json['addresses'] as List<dynamic>?)
          ?.map((e) => Address.fromJson(Map<String, dynamic>.from(e as Map)))
          .toList(),
      jpgPhoto: const Uint8ListToStringConverter()
          .fromJson(json['jpg_photo'] as String?),
    );

Map<String, dynamic> _$PersonToJson(Person instance) => <String, dynamic>{
      'id': instance.id,
      'last_name': instance.lastName,
      'first_name': instance.firstName,
      'date_of_birth': instance.dateOfBirth?.toIso8601String(),
      'addresses': instance.addresses.map((e) => e.toJson()).toList(),
      'jpg_photo': const Uint8ListToStringConverter().toJson(instance.jpgPhoto),
    };
