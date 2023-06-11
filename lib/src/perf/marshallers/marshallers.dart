import 'stub.dart'
    if (dart.library.io) 'vm.dart'
    if (dart.library.js) 'web.dart'
    if (dart.library.html) 'web.dart';

const personMarshaller = StringPersonMarshaller();
const intListAsStringMarshaller = ListIntAsStringMarshaller();
const intListAsBufferMarshaller = ListIntAsBufferMarshaller();
const bigIntMarshaller = BigIntMarshaller();
