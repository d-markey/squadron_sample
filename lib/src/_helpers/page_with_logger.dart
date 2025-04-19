import 'dart:async';

import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

final kLogger = GlobalKey(debugLabel: 'Logger');

void noop(void Function() callback) {}
SquadronPlatformType defaultMode() => Squadron.platformType;

abstract class PageContent {
  PageContent(this.title);

  final String title;

  Widget body();
  List<Widget> actions();

  void Function(void Function()) setState = noop;
  SquadronPlatformType Function() getMode = defaultMode;

  void dispose() {
    _controller.close();
  }

  void refresh() {
    setState(() {});
  }

  final _logs = <String>[];

  void log(dynamic message) {
    if (!_controller.isClosed) {
      _logs.add('[${DateTime.now()}] $message');
      _controller.add(_logs.join('\n'));
    }
  }

  void clearLogs() {
    _logs.clear();
    _controller.add('');
  }

  Stream<String> get logs => _controller.stream;

  final _controller = StreamController<String>();

  Widget action({required void Function() onPressed, required String label}) =>
      FloatingActionButton(
        onPressed: onPressed,
        tooltip: label,
        child: Text(label, textAlign: TextAlign.center),
      );
}

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

  SquadronPlatformType _getMode() => _mode;

  @override
  void initState() {
    super.initState();
    widget.content.setState = _setState;
    widget.content.getMode = _getMode;
    widget.content.log('Page "${widget.content.title}" ready');
  }

  @override
  void didUpdateWidget(covariant PageWithLogger oldWidget) {
    super.didUpdateWidget(oldWidget);
    oldWidget.content.setState = noop;
    oldWidget.content.getMode = defaultMode;
    widget.content.setState = _setState;
    widget.content.getMode = _getMode;
  }

  @override
  void dispose() {
    widget.content.setState = noop;
    widget.content.getMode = defaultMode;
    super.dispose();
  }

  final _scrollController = ScrollController();
  SquadronPlatformType _mode = Squadron.platformType;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.content.title),
          bottom: widget.tabBar,
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Expanded(
                flex: 3,
                child: widget.content.body(),
              ),
              Expanded(
                flex: 1,
                child: StreamBuilder(
                  stream: widget.content.logs,
                  builder: (_, snapshot) {
                    Timer(Duration.zero, () {
                      if (_scrollController.hasClients) {
                        _scrollController
                            .jumpTo(_scrollController.position.maxScrollExtent);
                      }
                    });
                    return DecoratedBox(
                      decoration: BoxDecoration(border: Border.all()),
                      child: SingleChildScrollView(
                        controller: _scrollController,
                        child: Row(
                          children: [
                            Expanded(
                              child: Padding(
                                padding: EdgeInsets.all(4),
                                child: Text(snapshot.data ?? 'Ready'),
                              ),
                            )
                          ],
                        ),
                      ),
                    );
                  },
                ),
              )
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
