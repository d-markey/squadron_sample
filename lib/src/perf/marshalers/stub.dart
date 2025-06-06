import 'package:squadron/squadron.dart';

import '../perf.dart';

class UnsupportedMarshaler<T> extends GenericMarshaler<T> {
  const UnsupportedMarshaler();

  @override
  dynamic marshal(T data, [MarshalingContext? _]) =>
      throw UnsupportedError('Unsupported marshaling from $T');

  @override
  T unmarshal(dynamic data, [MarshalingContext? _]) =>
      throw UnsupportedError('Unsupported marshaling to $T');
}

class StringPersonMarshaler extends UnsupportedMarshaler<Person> {
  const StringPersonMarshaler();
}

class ListIntAsBufferMarshaler extends UnsupportedMarshaler<List<int>> {
  const ListIntAsBufferMarshaler();
}

class ListIntAsStringMarshaler extends UnsupportedMarshaler<List<int>> {
  const ListIntAsStringMarshaler();
}
