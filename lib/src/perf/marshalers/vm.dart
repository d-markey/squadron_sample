import 'package:squadron/squadron.dart';

import '../perf.dart';

class BinaryPersonMarshaler extends IdentityMarshaler<Person> {
  const BinaryPersonMarshaler();
}

class StringPersonMarshaler extends IdentityMarshaler<Person> {
  const StringPersonMarshaler();
}

class ListIntAsBufferMarshaler extends IdentityMarshaler<List<int>> {
  const ListIntAsBufferMarshaler();
}

class ListIntAsStringMarshaler extends IdentityMarshaler<List<int>> {
  const ListIntAsStringMarshaler();
}

class BigIntMarshaler extends IdentityMarshaler<BigInt> {
  const BigIntMarshaler();
}
