import 'package:squadron/squadron_service.dart';

import '../perf.dart';

class UnsupportedMarshaller<T> extends GenericMarshaller<T> {
  const UnsupportedMarshaller();

  @override
  dynamic marshall(T data) =>
      throw UnsupportedError('Unsupported marshalling from $T');

  @override
  T unmarshall(dynamic data) =>
      throw UnsupportedError('Unsupported marshalling to $T');
}

class StringPersonMarshaller extends UnsupportedMarshaller<Person> {
  const StringPersonMarshaller();
}

class ListIntAsBufferMarshaller extends UnsupportedMarshaller<List<int>> {
  const ListIntAsBufferMarshaller();
}

class ListIntAsStringMarshaller extends UnsupportedMarshaller<List<int>> {
  const ListIntAsStringMarshaller();
}

class BigIntMarshaller extends UnsupportedMarshaller<BigInt> {
  const BigIntMarshaller();
}
