import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import 'src/codegen/codegen_page.dart';
import 'src/parser3/parser3_page.dart';
import 'src/perf/perf_page.dart';
import 'src/pi-digits/pi_digits_page.dart';
import 'src/text-size/text_size_page.dart';
import 'src/thumbnails/thumbnail_page.dart';
import 'src/parser/parser_page.dart';
import 'src/parser2/parser2_page.dart';

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
    Tab(text: 'Codegen'),
    Tab(text: 'Perf'),
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

  TabBar _tabBar() => TabBar(tabs: myTabs, controller: _tabController);

  Widget _home(BuildContext context) {
    if (_tabController.index == 0) return PiDigitsPage(tabBar: _tabBar());
    if (_tabController.index == 1) return ThumbnailPage(tabBar: _tabBar());
    if (_tabController.index == 2) return TextSizePage(tabBar: _tabBar());
    if (_tabController.index == 3) return ParserPage(tabBar: _tabBar());
    if (_tabController.index == 4) return Parser2Page(tabBar: _tabBar());
    if (_tabController.index == 5) return Parser3Page(tabBar: _tabBar());
    if (_tabController.index == 6) return CodeGenPage(tabBar: _tabBar());
    if (_tabController.index == 7) return PerfPage(tabBar: _tabBar());
    return Text('_tabController.index = ${_tabController.index}');
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
