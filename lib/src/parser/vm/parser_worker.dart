import 'package:squadron/squadron_service.dart';

import '../parser_service.dart';

void start(Map command) => run((startRequest) => ParserService(), command);
