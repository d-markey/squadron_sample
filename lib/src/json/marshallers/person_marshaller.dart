import 'dart:typed_data';

import 'package:squadron/squadron.dart';

import '../model/person.dart';
import 'address_marshaller.dart';

class PersonMarshaller implements SquadronMarshaller<Person, Map> {
  const PersonMarshaller() : super();

  @override
  Map marshall(Person person) => {
        'i': person.id,
        'l': person.lastName,
        'f': person.firstName,
        if (person.dateOfBirth != null)
          'd': person.dateOfBirth!.toIso8601String(),
        'a': person.addresses.map(const AddressMarshaller().marshall).toList(),
        if (person.jpgPhoto != null) 'p': person.jpgPhoto,
      };

  @override
  Person unmarshall(Map map) {
    final p = Person(id: map['i'], lastName: map['l'], firstName: map['f']);
    final d = map['d'];
    if (d != null) {
      p.dateOfBirth = DateTime.parse(d);
    }
    final a = map['a'] as List?;
    if (a != null) {
      p.addresses
          .addAll(a.cast<Map>().map(const AddressMarshaller().unmarshall));
    }
    final ph = map['p'] as List?;
    if (ph != null) {
      p.jpgPhoto = (ph is Uint8List) ? ph : Uint8List.fromList(ph.cast<int>());
    }
    return p;
  }
}
