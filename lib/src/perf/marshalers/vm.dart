import 'package:squadron/squadron.dart';

import '../perf.dart';

typedef BinaryPersonMarshaler = IdentityMarshaler<Person>;
typedef StringPersonMarshaler = IdentityMarshaler<Person>;
typedef ListIntAsBufferMarshaler = IdentityMarshaler<List<int>>;
typedef ListIntAsStringMarshaler = IdentityMarshaler<List<int>>;
