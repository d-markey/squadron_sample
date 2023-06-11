import 'package:squadron/squadron_service.dart';

import '../perf.dart';

class BinaryPersonMarshaller extends IdentityMarshaller<Person> {
  const BinaryPersonMarshaller();
}

class StringPersonMarshaller extends IdentityMarshaller<Person> {
  const StringPersonMarshaller();
}

class ListIntAsBufferMarshaller extends IdentityMarshaller<List<int>> {
  const ListIntAsBufferMarshaller();
}

class ListIntAsStringMarshaller extends IdentityMarshaller<List<int>> {
  const ListIntAsStringMarshaller();
}

class BigIntMarshaller extends IdentityMarshaller<BigInt> {
  const BigIntMarshaller();
}
