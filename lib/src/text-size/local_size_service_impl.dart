import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import 'local_size_service.dart';

class LocalSizeServiceImpl extends LocalSizeService {
  @override
  Map measure(String text, {int? maxLines}) {
    final textPainter = TextPainter(
        text: TextSpan(text: text),
        maxLines: maxLines,
        textDirection: TextDirection.ltr);
    textPainter.layout(minWidth: 0, maxWidth: double.infinity);
    return {'w': textPainter.size.width, 'h': textPainter.size.height};
  }

  @override
  Stream<int> sequence(int count) async* {
    for (var i = 0; i < count; i++) {
      yield i;
    }
  }

  @override
  late final Map<int, CommandHandler> operations = {
    LocalSizeService.measureCommand: (req) =>
        measure(req.args[0], maxLines: req.args[1]),
    LocalSizeService.sequenceCommand: (req) =>
        sequence(req.args[0]),
  };
}
