import 'package:squadron/squadron.dart';

import '../local_size_service.dart';
import '../text_size_service.dart';

void start(WorkerRequest command) => run((startRequest) {
      final channel = Channel.deserialize(startRequest.args[0], null)!;
      final sizeClient = LocalSizeClient(channel);
      return TextSizeServiceImpl(sizeClient);
    }, command);
