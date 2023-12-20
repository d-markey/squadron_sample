import 'stub.dart'
    if (dart.library.io) 'vm.dart'
    if (dart.library.js) 'web.dart'
    if (dart.library.html) 'web.dart';

const personMarshaler = StringPersonMarshaler();
const intListAsStringMarshaler = ListIntAsStringMarshaler();
const intListAsBufferMarshaler = ListIntAsBufferMarshaler();
const bigIntMarshaler = BigIntMarshaler();
