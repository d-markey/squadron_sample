import 'package:squadron/squadron.dart';

import '../model/address.dart';

class AddressMarshaler extends SquadronMarshaler<Address, Map> {
  const AddressMarshaler() : super();

  @override
  Map marshal(Address data) => {
        'i': data.id,
        '1': data.line1,
        '2': data.line2,
        't': data.city,
        'z': data.zip,
        'c': data.country
      };

  @override
  Address unmarshal(Map data) => Address(
      id: data['i'],
      line1: data['1'],
      line2: data['2'],
      zip: data['z'],
      city: data['t'],
      country: data['c']);
}
