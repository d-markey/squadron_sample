import 'dart:async';

import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import '../logging_service.dart';
import 'page_content.dart';

final kLogger = GlobalKey(debugLabel: 'Logger');

void noop(void Function() callback) {}
SquadronPlatformType defaultMode() => Squadron.platformType;

class PageWithLogger extends StatefulWidget {
  const PageWithLogger({super.key, this.tabBar, required this.content});

  final TabBar? tabBar;
  final PageContent content;

  @override
  State<PageWithLogger> createState() => PageWithLoggerState();
}

class PageWithLoggerState extends State<PageWithLogger> {
  void _setState(void Function() callback) {
    if (mounted) {
      setState(callback);
    }
  }

  SquadronPlatformType _mode = defaultMode();
  SquadronPlatformType _getMode() => _mode;

  @override
  void initState() {
    super.initState();
    widget.content.setState = _setState;
    widget.content.getMode = _getMode;
    mainLogger.setLogger(widget.content.log);
  }

  @override
  void didUpdateWidget(covariant PageWithLogger oldWidget) {
    super.didUpdateWidget(oldWidget);
    oldWidget.content.setState = noop;
    oldWidget.content.getMode = defaultMode;
    widget.content.setState = _setState;
    widget.content.getMode = _getMode;
    mainLogger.setLogger(widget.content.log);
  }

  @override
  void dispose() {
    widget.content.setState = noop;
    widget.content.getMode = defaultMode;
    super.dispose();
  }

  final _logScrollController = ScrollController();

  static final _padding = EdgeInsets.all(4);
  static final _borders = BoxDecoration(border: Border.all());
  static final _whiteText = const TextStyle(color: Colors.white);

  static final _logHeader = DecoratedBox(
    decoration: BoxDecoration(
      border: Border.all(),
      color: Colors.blueAccent,
    ),
    child: Row(
      children: [
        Expanded(
          child: Padding(
            padding: _padding,
            child: Text('==[ LOG ]==', style: _whiteText),
          ),
        ),
      ],
    ),
  );

  void _scrollLogToEnd() {
    for (var position in _logScrollController.positions) {
      if (position.hasContentDimensions) {
        _logScrollController.jumpTo(position.maxScrollExtent);
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Padding(
            padding: _padding,
            child: Text(widget.content.title),
          ),
          bottom: widget.tabBar,
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Expanded(
                flex: 3,
                child: SingleChildScrollView(
                  child:
                      Row(children: [Expanded(child: widget.content.body())]),
                ),
              ),
              _logHeader,
              Expanded(
                flex: 2,
                child: StreamBuilder(
                  stream: widget.content.logs,
                  builder: (_, snapshot) {
                    Timer(Duration.zero, _scrollLogToEnd);
                    return DecoratedBox(
                      decoration: _borders,
                      child: SingleChildScrollView(
                        controller: _logScrollController,
                        child: Row(children: [
                          Expanded(
                            child: Padding(
                              padding: _padding,
                              child: Text(snapshot.data ?? 'Ready'),
                            ),
                          )
                        ]),
                      ),
                    );
                  },
                ),
              ),
            ],
          ),
        ),
        floatingActionButton: Row(
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            FloatingActionButton(
              onPressed: widget.content.clearLogs,
              tooltip: 'Clear Logs',
              child: const Text('Clear Logs', textAlign: TextAlign.center),
            ),
            if (_mode == SquadronPlatformType.js)
              FloatingActionButton(
                onPressed: () => _setState(() {
                  _mode = SquadronPlatformType.wasm;
                }),
                tooltip: 'Switch to WASM',
                child: const Text(
                  'Switch to WASM',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 12),
                ),
              ),
            if (_mode == SquadronPlatformType.wasm)
              FloatingActionButton(
                onPressed: () => _setState(() {
                  _mode = SquadronPlatformType.js;
                }),
                tooltip: 'Switch to JS',
                child: const Text(
                  'Switch to JS',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 12),
                ),
              ),
            ...widget.content.actions()
          ],
        ));
  }
}
