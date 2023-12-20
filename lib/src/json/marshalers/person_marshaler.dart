import 'dart:typed_data';

import 'package:squadron/squadron.dart';

import '../model/person.dart';
import 'address_marshaler.dart';

class PersonMarshaler extends SquadronMarshaler<Person, Map> {
  const PersonMarshaler() : super();

  @override
  Map marshal(Person data) => {
        'i': data.id,
        'l': data.lastName,
        'f': data.firstName,
        if (data.dateOfBirth != null) 'd': data.dateOfBirth!.toIso8601String(),
        'a': data.addresses.map(const AddressMarshaler().marshal).toList(),
        if (data.jpgPhoto != null) 'p': data.jpgPhoto,
      };

  @override
  Person unmarshal(Map data) {
    final p = Person(id: data['i'], lastName: data['l'], firstName: data['f']);
    final d = data['d'];
    if (d != null) {
      p.dateOfBirth = DateTime.parse(d);
    }
    final a = data['a'] as List?;
    if (a != null) {
      p.addresses.addAll(a.cast<Map>().map(const AddressMarshaler().unmarshal));
    }
    final ph = data['p'] as List?;
    if (ph != null) {
      p.jpgPhoto = (ph is Uint8List) ? ph : Uint8List.fromList(ph.cast<int>());
    }
    return p;
  }
}
