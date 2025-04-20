import 'dart:async';
import 'dart:convert';

import 'package:squadron/squadron.dart';

import '../logging_service.dart';
import '_gen/text_size_service.activator.g.dart';
import 'local_size_interface.dart';

part '_gen/text_size_service.worker.g.dart';

@SquadronService(baseUrl: '~/workers')
class TextSizeService {
  TextSizeService(@localWorker this.logger, @localWorker this.sizeService);

  final ILocalSize sizeService;
  final ILoggingService logger;

  @squadronMethod
  Future<String> doSomethingWithTexts(List<String> texts) async {
    final res = <String, String>{};
    for (String text in texts) {
      final size = await sizeService.measure(text);
      final key = text.replaceAll('\r', '\\r').replaceAll('\n', '\\n');
      res[key] = '${size['w']}x${size['h']}';
      logger.log('[$threadId] $key --> ${res[key]}');
    }
    return jsonEncode(res);
  }
}
