import 'dart:convert';
import 'dart:typed_data';

import 'package:squadron/squadron.dart';

import '../perf.dart';

class BinaryPersonMarshaler extends SquadronMarshaler<Person, ByteBuffer> {
  const BinaryPersonMarshaler();

  @override
  ByteBuffer marshal(Person data) {
    final bytes = Uint8List.fromList(utf8
        .encode('${data.lastName}\u0000${data.firstName}\u0000${data.dob}'));
    // Squadron.info('$data serialized as $bytes');
    return bytes.buffer;
  }

  @override
  Person unmarshal(ByteBuffer data) {
    final parts = utf8.decode(data.asUint8List()).split('\u0000');
    final person = Person(parts[0], parts[1], DateTime.parse(parts[2]));
    // Squadron.info('$data deserialized as $person');
    return person;
  }
}

class StringPersonMarshaler extends SquadronMarshaler<Person, String> {
  const StringPersonMarshaler();

  @override
  String marshal(Person data) {
    final str = '${data.lastName}\u0000${data.firstName}\u0000${data.dob}';
    // Squadron.info('$data serialized as $str');
    return str;
  }

  @override
  Person unmarshal(String data) {
    final parts = data.split('\u0000');
    final person = Person(parts[0], parts[1], DateTime.parse(parts[2]));
    // Squadron.info('$data deserialized as $person');
    return person;
  }
}

class ListIntAsBufferMarshaler
    extends SquadronMarshaler<List<int>, ByteBuffer> {
  const ListIntAsBufferMarshaler();

  @override
  ByteBuffer marshal(List<int> data) {
    // Squadron.info('Marshaling ${data.length} integers');
    return Uint32List.fromList(data).buffer;
  }

  @override
  List<int> unmarshal(ByteBuffer data) {
    // Squadron.info('Unmarshaling ${data.lengthInBytes} bytes');
    return Uint32List.view(data);
  }
}

class ListIntAsStringMarshaler extends SquadronMarshaler<List<int>, String> {
  const ListIntAsStringMarshaler();

  @override
  String marshal(List<int> data) {
    // Squadron.info('Marshaling ${data.length} integers as String');
    return data.join(';');
  }

  @override
  List<int> unmarshal(String data) {
    // Squadron.info('Unmarshaling ${data.length} characters');
    return data.split(';').map(int.parse).toList();
  }
}

class BigIntMarshaler extends SquadronMarshaler<BigInt, String> {
  const BigIntMarshaler();

  @override
  String marshal(BigInt data) {
    // Squadron.info('Marshaling $data');
    return data.toString();
  }

  @override
  BigInt unmarshal(String data) {
    // Squadron.info('Unmarshaling $data');
    return BigInt.parse(data);
  }
}
