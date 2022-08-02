import 'codegen.xplat.g.dart'
if (dart.library.js) 'codegen.web.g.dart'
if (dart.library.html) 'codegen.web.g.dart'
if (dart.library.io) 'codegen.vm.g.dart';
final $CodeGenActivator = getCodeGenActivator();