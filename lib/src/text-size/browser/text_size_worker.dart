import 'package:squadron/squadron.dart';

import '../../../root_logger.dart';
import '../local_size_service.dart';
import '../text_size_service.dart';

void main() => run((startRequest) {
      rootLogger.i('Initializing LocalSizeClient with ${startRequest.args[0]}');
      final channel = Channel.deserialize(startRequest.args[0], null)!;
      final sizeClient = LocalSizeClient(channel);
      return TextSizeServiceImpl(sizeClient);
    });
