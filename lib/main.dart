import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import 'src/codegen/codegen_page.dart';
import 'src/json/json_page.dart';
import 'src/parser3/parser3_page.dart';
import 'src/perf/perf_page.dart';
import 'src/pi-digits/pi_digits_page.dart';
import 'src/text-size/text_size_page.dart';
import 'src/thumbnails/thumbnail_page.dart';
import 'src/parser/parser_page.dart';
import 'src/parser2/parser2_page.dart';
import 'src/data-uri/data_uri_page.dart';

void initSquadron(String id) {
  Squadron.setId(id);
  Squadron.setLogger(ConsoleSquadronLogger());
  Squadron.logLevel = SquadronLogLevel.all;
  Squadron.debugMode = false;
}

void main() {
  initSquadron('FlutterDemo');
  runApp(const SampleApp());
}

class SampleApp extends StatefulWidget {
  const SampleApp({Key? key}) : super(key: key);

  @override
  State<SampleApp> createState() => _SampleAppState();
}

class _SampleAppState extends State<SampleApp>
    with SingleTickerProviderStateMixin {
  static const List<Tab> myTabs = <Tab>[
    Tab(text: 'Pi Digits'),
    Tab(text: 'Thumbnails'),
    Tab(text: 'TextSize'),
    Tab(text: 'Parser (list)'),
    Tab(text: 'Parser (stream)'),
    Tab(text: 'Parser (yield)'),
    Tab(text: 'Json'),
    Tab(text: 'Codegen'),
    Tab(text: 'Perf'),
    Tab(text: 'Uri'),
  ];

  late TabController _tabController;

  @override
  void initState() {
    super.initState();
    _tabController = TabController(vsync: this, length: myTabs.length);
    _tabController.addListener(() {
      setState(() {});
    });
  }

  @override
  void dispose() {
    _tabController.dispose();
    super.dispose();
  }

  late final _pages = [
    (tabBar) => PiDigitsPage(tabBar: tabBar),
    (tabBar) => ThumbnailPage(tabBar: tabBar),
    (tabBar) => TextSizePage(tabBar: tabBar),
    (tabBar) => ParserPage(tabBar: tabBar),
    (tabBar) => Parser2Page(tabBar: tabBar),
    (tabBar) => Parser3Page(tabBar: tabBar),
    (tabBar) => JsonPage(tabBar: tabBar),
    (tabBar) => CodeGenPage(tabBar: tabBar),
    (tabBar) => PerfPage(tabBar: tabBar),
    (tabBar) => UriParserPage(tabBar: tabBar),
  ];

  Widget _home(BuildContext context) {
    if (0 <= _tabController.index && _tabController.index < _pages.length) {
      final widget = _pages[_tabController.index];
      return widget(TabBar(tabs: myTabs, controller: _tabController));
    } else {
      return Text('_tabController.index = ${_tabController.index}');
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        theme: ThemeData(
          primarySwatch: Colors.blue,
        ),
        home: _home(context));
  }
}
