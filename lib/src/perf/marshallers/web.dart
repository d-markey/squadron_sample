import 'dart:convert';
import 'dart:typed_data';

import 'package:squadron/squadron_service.dart';

import '../perf.dart';

class BinaryPersonMarshaller implements SquadronMarshaller<Person, ByteBuffer> {
  const BinaryPersonMarshaller();

  @override
  ByteBuffer marshall(Person data) {
    final bytes = Uint8List.fromList(utf8
        .encode('${data.lastName}\u0000${data.firstName}\u0000${data.dob}'));
    // Squadron.info('$data serialized as $bytes');
    return bytes.buffer;
  }

  @override
  Person unmarshall(ByteBuffer data) {
    final parts = utf8.decode(data.asUint8List()).split('\u0000');
    final person = Person(parts[0], parts[1], DateTime.parse(parts[2]));
    // Squadron.info('$data deserialized as $person');
    return person;
  }
}

class StringPersonMarshaller implements SquadronMarshaller<Person, String> {
  const StringPersonMarshaller();

  @override
  String marshall(Person data) {
    final str = '${data.lastName}\u0000${data.firstName}\u0000${data.dob}';
    // Squadron.info('$data serialized as $str');
    return str;
  }

  @override
  Person unmarshall(String data) {
    final parts = data.split('\u0000');
    final person = Person(parts[0], parts[1], DateTime.parse(parts[2]));
    // Squadron.info('$data deserialized as $person');
    return person;
  }
}

class ListIntAsBufferMarshaller
    implements SquadronMarshaller<List<int>, ByteBuffer> {
  const ListIntAsBufferMarshaller();

  @override
  ByteBuffer marshall(List<int> data) {
    // Squadron.info('Marshalling ${data.length} integers');
    return Uint32List.fromList(data).buffer;
  }

  @override
  List<int> unmarshall(ByteBuffer data) {
    // Squadron.info('Unmarshalling ${data.lengthInBytes} bytes');
    return Uint32List.view(data);
  }
}

class ListIntAsStringMarshaller
    implements SquadronMarshaller<List<int>, String> {
  const ListIntAsStringMarshaller();

  @override
  String marshall(List<int> data) {
    // Squadron.info('Marshalling ${data.length} integers as String');
    return data.join(';');
  }

  @override
  List<int> unmarshall(String data) {
    // Squadron.info('Unmarshalling ${data.length} characters');
    return data.split(';').map(int.parse).toList();
  }
}

class BigIntMarshaller implements SquadronMarshaller<BigInt, String> {
  const BigIntMarshaller();

  @override
  String marshall(BigInt data) {
    // Squadron.info('Marshalling $data');
    return data.toString();
  }

  @override
  BigInt unmarshall(String data) {
    // Squadron.info('Unmarshalling $data');
    return BigInt.parse(data);
  }
}
