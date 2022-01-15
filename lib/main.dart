import 'package:flutter/material.dart';

import 'src/pi-digits/pi_digits_page.dart';
import 'src/thumbnails/thumbnail_page.dart';

void main() {
  runApp(const SampleApp());
}

class SampleApp extends StatefulWidget {
  const SampleApp({Key? key}) : super(key: key);

  @override
  State<SampleApp> createState() => _SampleAppState();
}

class _SampleAppState extends State<SampleApp> with SingleTickerProviderStateMixin {
   static const List<Tab> myTabs = <Tab>[
     Tab(text: 'Pi Digits'),
     Tab(text: 'Thumbnails'),
   ];

   late TabController _tabController;

   @override
   void initState() {
     super.initState();
     _tabController = TabController(vsync: this, length: myTabs.length);
     _tabController.addListener(() {
       setState(() { });
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
    if (_tabController.index == 1)  return ThumbnailPage(tabBar: _tabBar());
    return Text('_tabController.index = ${_tabController.index}');
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: _home(context)
    );
  }
}
