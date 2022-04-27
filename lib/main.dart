import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import 'src/pi-digits/pi_digits_page.dart';
import 'src/text-size/text_size_page.dart';
import 'src/thumbnails/thumbnail_page.dart';
import 'src/parser/parser_page.dart';

void main() {
  Squadron.setId('Flutter');
  Squadron.logger = ConsoleSquadronLogger();
  Squadron.logLevel = SquadronLogLevel.off;
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
    Tab(text: 'Parser'),
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
