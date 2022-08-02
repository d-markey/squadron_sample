import 'package:squadron/squadron_service.dart';
import 'codegen.dart';
// VM entry point
void _start(Map command) => run((startRequest) => CodeGen(), command);
dynamic getCodeGenActivator() => _start;