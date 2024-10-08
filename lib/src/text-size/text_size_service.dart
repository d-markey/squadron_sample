import 'dart:async';

import 'package:squadron/squadron.dart';

import '../../root_logger.dart';
import 'local_size_service.dart';

// this abstract class represents the functionality you want to support in your service
abstract class TextSizeService {
  FutureOr doSomethingWithTexts(List texts);

  // this constant is used to identify the method to call when communicating with isolates / web workers
  static const doSomethingWithTextsCommand = 1;
}

// this class is the actual implementation of the service defined above
class TextSizeServiceImpl implements TextSizeService, WorkerService {
  TextSizeServiceImpl(this._sizeService);

  // in Workers, the _sizeService will be set to a SizeClient to communicate with the TextSizeServer in the main Isolate
  final LocalSizeService _sizeService;

  @override
  Future doSomethingWithTexts(List texts) async {
    for (String text in texts) {
      final size = await _sizeService.measure(text);
      rootLogger.i(
          '${text.replaceAll('\r', '\\r').replaceAll('\n', '\\n')} --> ${size['w']}x${size['h']}');
    }
  }

  // this map creates the correspondance between the service constants from MyWorkerService
  // and the method implementations in MyWorkerServiceImpl
  @override
  late final Map<int, CommandHandler> operations = {
    TextSizeService.doSomethingWithTextsCommand: (r) =>
        doSomethingWithTexts(r.args[0])
  };
}
