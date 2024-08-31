import 'dart:convert';

import 'package:squadron/squadron.dart';

import '../../../root_logger.dart';
import '../parser2_service.dart';

class WebParser2Service extends Parser2Service {
  WebParser2Service(super.batchSize);

  // command IDs --> command implementations
  @override
  Map<int, CommandHandler> get operations => {
        Parser2Service.parseCommand: (r) {
          rootLogger.d('parse command (Web) received in ${r.travelTime} µs');
          return parse(r.args, r.cancelToken).map((list) => jsonEncode(list));
        },
      };
}

void main() =>
    run((startRequest) => WebParser2Service(Cast.toInt(startRequest.args[0])));
