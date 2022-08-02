import 'package:squadron/squadron_service.dart';
import 'codegen.dart';
// Web entry point
void main() => run((startRequest) => CodeGen());
dynamic getCodeGenActivator() => '/workers/codegen.web.g.dart.js';