import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import 'size_service.dart';

class SizeServiceImpl extends SizeService {
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
  late final Map<int, CommandHandler> operations = {
    SizeService.measureCommand: (req) =>
        measure(req.args[0], maxLines: req.args[1]),
  };
}
