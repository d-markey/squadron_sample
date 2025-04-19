import 'dart:async';
import 'dart:convert';

import 'package:squadron/squadron.dart';

import '../../root_logger.dart';
import 'generated/text_size_service.activator.g.dart';
import 'local_size_interface.dart';

part 'generated/text_size_service.worker.g.dart';

@SquadronService(baseUrl: '~/workers')
class TextSizeService {
  TextSizeService(@localWorker this.sizeService);

  final ILocalSize sizeService;

  @squadronMethod
  Future<String> doSomethingWithTexts(List<String> texts) async {
    final res = <String, String>{};
    for (String text in texts) {
      final size = await sizeService.measure(text);
      final key = text.replaceAll('\r', '\\r').replaceAll('\n', '\\n');
      res[key] = '${size['w']}x${size['h']}';
      rootLogger.i('$key --> ${res[key]}');
    }
    return jsonEncode(res);
  }
}
