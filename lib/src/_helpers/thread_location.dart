import 'thread_location.vm.dart'
    if (dart.library.html) 'thread_location.web.dart'
    if (dart.library.js_interop) 'thread_location.web.dart';

String get threadLocation => threadLocationImpl;
