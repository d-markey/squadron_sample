import 'package:squadron/squadron.dart';

import '../model/address.dart';

class AddressMarshaller implements SquadronMarshaller<Address, Map> {
  const AddressMarshaller() : super();

  @override
  Map marshall(Address address) => {
        'i': address.id,
        '1': address.line1,
        '2': address.line2,
        't': address.city,
        'z': address.zip,
        'c': address.country
      };

  @override
  Address unmarshall(Map map) => Address(
      id: map['i'],
      line1: map['1'],
      line2: map['2'],
      zip: map['z'],
      city: map['t'],
      country: map['c']);
}
