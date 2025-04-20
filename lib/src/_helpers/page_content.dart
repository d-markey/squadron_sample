import 'dart:async';

import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import 'page_with_logger.dart';

abstract class PageContent {
  PageContent(this.title) {
    log('[$threadId] Page $title ready');
  }

  final String title;

  final _logs = <String>[];
  Stream<String> get logs => _controller.stream;
  final _controller = StreamController<String>();

  Widget body();
  List<Widget> actions();

  void Function(void Function()) setState = noop;
  SquadronPlatformType Function() getMode = defaultMode;

  void dispose() => _controller.close();

  void refresh() => setState(() {});

  void log(String message) {
    if (!_controller.isClosed) {
      _logs.add('[${DateTime.now()}] $message');
      _controller.add(_logs.join('\n'));
    }
  }

  void clearLogs() {
    _logs.clear();
    _controller.add('');
  }

  Widget action({required void Function() onPressed, required String label}) =>
      FloatingActionButton(
        onPressed: onPressed,
        tooltip: label,
        child: Text(label, textAlign: TextAlign.center),
      );
}
