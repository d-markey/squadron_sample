import 'dart:convert';

import 'package:squadron/squadron_service.dart';

import '../parser2_service.dart';

class WebParser2Service extends Parser2Service {
  WebParser2Service(int batchSize) : super(batchSize);

  // command IDs --> command implementations
  @override
  Map<int, CommandHandler> get operations => {
        Parser2Service.parseCommand: (r) {
          Squadron.debug('parse command (Web) received in ${r.travelTime} µs');
          return parse(r.args, r.cancelToken).map((list) => jsonEncode(list));
        },
      };
}

void main() => run((startRequest) => WebParser2Service(startRequest.args[0]));
