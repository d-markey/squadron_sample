import 'package:squadron/squadron.dart';

import '../parser_service.dart';

void start(List command) => run((startRequest) => ParserService(), command);
