import 'dart:convert';

import 'package:squadron/squadron.dart';

import '../parser_service.dart';

class WebParserService extends ParserService {
  WebParserService();

  // command IDs --> command implementations
  @override
  Map<int, CommandHandler> get operations => {
        ParserService.parseCommand: (r) async {
          Squadron.debug('parse command (Web) received in ${r.travelTime} µs');
          final list = await parse(r.args, r.cancelToken);
          return jsonEncode(list);
        },
      };
}

void main() => run((startRequest) => WebParserService());
