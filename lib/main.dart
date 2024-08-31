import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import 'root_logger.dart';
import 'src/_helpers/thread_location.web.dart';
import 'src/codegen/codegen_page.dart';
import 'src/json/json_page.dart';
import 'src/parser/parser_page.dart';
import 'src/parser2/parser2_page.dart';
import 'src/parser3/parser3_page.dart';
import 'src/perf/perf_page.dart';
import 'src/pi-digits/pi_digits_page.dart';
import 'src/text-size/text_size_page.dart';
import 'src/thumbnails/thumbnail_page.dart';

void main() {
  rootLogger.i('MAIN THREAD = $threadId, running from $threadLocation');
  Future(() => runApp(const SampleApp()));
}

class SampleApp extends StatefulWidget {
  const SampleApp({super.key});

  @override
  State<SampleApp> createState() => _SampleAppState();
}

class _SampleAppState extends State<SampleApp>
    with SingleTickerProviderStateMixin {
  static final myTabs = <Tab, Widget Function(TabBar)>{
    const Tab(text: 'Pi Digits'): (tabBar) => PiDigitsPage(tabBar: tabBar),
    const Tab(text: 'Thumbnails'): (tabBar) => ThumbnailPage(tabBar: tabBar),
    const Tab(text: 'TextSize'): (tabBar) => TextSizePage(tabBar: tabBar),
    const Tab(text: 'Parser (list)'): (tabBar) => ParserPage(tabBar: tabBar),
    const Tab(text: 'Parser (stream)'): (tabBar) => Parser2Page(tabBar: tabBar),
    const Tab(text: 'Parser (yield)'): (tabBar) => Parser3Page(tabBar: tabBar),
    const Tab(text: 'Json'): (tabBar) => JsonPage(tabBar: tabBar),
    const Tab(text: 'Codegen'): (tabBar) => CodeGenPage(tabBar: tabBar),
    const Tab(text: 'Perf'): (tabBar) => PerfPage(tabBar: tabBar),
  };

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

  Widget _home(BuildContext context) {
    if (0 <= _tabController.index && _tabController.index < myTabs.length) {
      final widgetBuilder = myTabs.values.skip(_tabController.index).first;
      return widgetBuilder(
          TabBar(tabs: myTabs.keys.toList(), controller: _tabController));
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
