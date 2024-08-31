import 'stub.dart'
    if (dart.library.js_interop) 'web.dart'
    if (dart.library.io) 'vm.dart';

const personMarshaler = StringPersonMarshaler();
const intListAsStringMarshaler = ListIntAsStringMarshaler();
const intListAsBufferMarshaler = ListIntAsBufferMarshaler();
const bigIntMarshaler = BigIntMarshaler();
