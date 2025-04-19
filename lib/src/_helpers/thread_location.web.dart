import 'dart:js_interop';
import 'dart:js_interop_unsafe';
import 'dart:typed_data';

import 'package:web/web.dart' as web;

@JS()
external JSObject get location;

@JS()
external JSObject? get _flutter;

Object? get buildConfig => _flutter?['buildConfig'].dartify();

final String threadLocationImpl =
    'Web Worker ${location.dartify().toString()} with config=$buildConfig; WasmGC = ${checkWasmGcSupport()}';

bool checkWasmGcSupport() {
  final s =
      Uint8List.fromList([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 95, 1, 120, 0]);
  return web.WebAssembly.validate(s.toJS);
}
