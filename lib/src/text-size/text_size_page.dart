import 'package:flutter/material.dart';

import '../../pools.dart';

class TextSizePage extends StatefulWidget {
  const TextSizePage({Key? key, this.tabBar}) : super(key: key);

  final TabBar? tabBar;

  @override
  State<TextSizePage> createState() => _TextSizePageState();
}

class _TextSizePageState extends State<TextSizePage> {
  _TextSizePageState();

  Future _getTextsSizes() async {
    await myWorkerPool.doSomethingWithTexts([
        'Text 1',
        'Text 2',
        'Longer Text #3',
        'Multi\nLine Text'
      ]);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('SQUADRON SAMPLE - TEXT SIZE'),
        bottom: widget.tabBar,
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            TextButton(
              onPressed: () => _getTextsSizes(),
              child: const Text('Get Texts Sizes'),
            ),
          ],
        ),
      ),
    );
  }
}
