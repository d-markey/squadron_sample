import 'package:flutter/material.dart';

import 'src/_helpers/page_with_logger.dart';
import 'src/http/http_content.dart';
import 'src/json/json_content.dart';
import 'src/parser/parser_content.dart';
import 'src/parser2/parser2_content.dart';
import 'src/perf/perf_content.dart';
import 'src/pi-digits/pi_digits_content.dart';
import 'src/text-size/text_size_content.dart';
import 'src/thumbnails/thumbnail_content.dart';
import 'src/uint8list/uint8list_content.dart';

void main() {
  runApp(const SampleApp());
}

class SampleApp extends StatefulWidget {
  const SampleApp({super.key});

  @override
  State<SampleApp> createState() => _SampleAppState();
}

class _SampleAppState extends State<SampleApp>
    with SingleTickerProviderStateMixin {
  static final myTabs = <Tab, Widget Function(TabBar)>{
    const Tab(text: 'Pi Digits'): (tabBar) => PageWithLogger(
          content: PiDigitsContent(),
          tabBar: tabBar,
        ),
    const Tab(text: 'Thumbnails'): (tabBar) => PageWithLogger(
          content: ThumbnailContent(),
          tabBar: tabBar,
        ),
    const Tab(text: 'TextSize'): (tabBar) => PageWithLogger(
          content: TextSizeContent(),
          tabBar: tabBar,
        ),
    const Tab(text: 'Parser (list)'): (tabBar) => PageWithLogger(
          content: ParserContent(),
          tabBar: tabBar,
        ),
    const Tab(text: 'Parser (stream)'): (tabBar) => PageWithLogger(
          content: Parser2Content(),
          tabBar: tabBar,
        ),
    const Tab(text: 'Json'): (tabBar) => PageWithLogger(
          content: JsonContent(),
          tabBar: tabBar,
        ),
    const Tab(text: 'HTTP'): (tabBar) => PageWithLogger(
          content: HttpContent(),
          tabBar: tabBar,
        ),
    const Tab(text: 'Uint8List'): (tabBar) => PageWithLogger(
          content: Uint8ListContent(),
          tabBar: tabBar,
        ),
    const Tab(text: 'Perf'): (tabBar) => PageWithLogger(
          content: PerfContent(),
          tabBar: tabBar,
        ),
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
      return widgetBuilder(TabBar(
        tabs: myTabs.keys.toList(),
        controller: _tabController,
      ));
    } else {
      return Text(
        '_tabController.index = ${_tabController.index} not in [0..${myTabs.length - 1}]',
      );
    }
  }

  @override
  Widget build(BuildContext context) => MaterialApp(
        theme: ThemeData(primarySwatch: Colors.blue),
        home: _home(context),
      );
}
