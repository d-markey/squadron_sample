import 'dart:async';

import 'package:flutter/material.dart';

import 'local_size_interface.dart';

class LocalSizeService implements ILocalSize {
  @override
  FutureOr<Map<String, double>> measure(String text, {int? maxLines}) {
    final textPainter = TextPainter(
        text: TextSpan(text: text),
        maxLines: maxLines,
        textDirection: TextDirection.ltr);
    textPainter.layout(minWidth: 0, maxWidth: double.infinity);
    return {'w': textPainter.size.width, 'h': textPainter.size.height};
  }
}
