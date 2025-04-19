import 'dart:convert';
import 'dart:typed_data';

import 'package:squadron/squadron.dart';

import '../perf.dart';

class BinaryPersonMarshaler extends GenericMarshaler<Person> {
  const BinaryPersonMarshaler();

  @override
  ByteBuffer marshal(Person data, [MarshalingContext? _]) {
    final bytes = utf8.encode(
      '${data.lastName}\u0000${data.firstName}\u0000${data.dob.millisecondsSinceEpoch}',
    );
    // Squadron.info('$data serialized as $bytes');
    return bytes.buffer;
  }

  @override
  Person unmarshal(dynamic /*ByteBuffer*/ data, [MarshalingContext? _]) {
    final parts =
        utf8.decode((data as ByteBuffer).asUint8List()).split('\u0000');
    final person = Person(
      parts[0],
      parts[1],
      DateTime.fromMillisecondsSinceEpoch(int.parse(parts[2])),
    );
    // Squadron.info('$data deserialized as $person');
    return person;
  }
}

class StringPersonMarshaler extends GenericMarshaler<Person> {
  const StringPersonMarshaler();

  @override
  String marshal(Person data, [MarshalingContext? _]) {
    final str = '${data.lastName}\u0000${data.firstName}\u0000${data.dob}';
    // Squadron.info('$data serialized as $str');
    return str;
  }

  @override
  Person unmarshal(dynamic /*String*/ data, [MarshalingContext? _]) {
    final parts = (data as String).split('\u0000');
    final person = Person(parts[0], parts[1], DateTime.parse(parts[2]));
    // Squadron.info('$data deserialized as $person');
    return person;
  }
}

class ListIntAsBufferMarshaler extends GenericMarshaler<List<int>> {
  const ListIntAsBufferMarshaler();

  @override
  ByteBuffer marshal(List<int> data, [MarshalingContext? _]) {
    return Uint32List.fromList(data).buffer;
  }

  @override
  List<int> unmarshal(dynamic /*ByteBuffer*/ data, [MarshalingContext? _]) {
    return Uint32List.view(data);
  }
}

class ListIntAsStringMarshaler extends GenericMarshaler<List<int>> {
  const ListIntAsStringMarshaler();

  @override
  String marshal(List<int> data, [MarshalingContext? _]) {
    // Squadron.info('Marshaling ${data.length} integers as String');
    return data.join(';');
  }

  @override
  List<int> unmarshal(dynamic /*String*/ data, [MarshalingContext? _]) {
    // Squadron.info('Unmarshaling ${data.length} characters');
    return (data as String).split(';').map(int.parse).toList();
  }
}
