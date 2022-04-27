import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import 'local_size_service.dart';
import 'local_size_service_impl.dart';
import 'my_worker_pool.dart';

class TextSizePage extends StatefulWidget {
  const TextSizePage({Key? key, this.tabBar}) : super(key: key);

  final TabBar? tabBar;

  @override
  State<TextSizePage> createState() => _TextSizePageState();
}

class _TextSizePageState extends State<TextSizePage> {
  _TextSizePageState();

  Future _getTextsSizes() async {
    MyWorkerPool? myWorkerPool;
    try {
      final sizeService =
          LocalWorker<LocalSizeService>.create(LocalSizeServiceImpl());
      myWorkerPool = MyWorkerPool(
          sizeService,
          const ConcurrencySettings(
              minWorkers: 1, maxWorkers: 4, maxParallel: 2));
      await myWorkerPool.doSomethingWithTexts(
          ['Text 1', 'Text 2', 'Longer Text #3', 'Multi\nLine Text']);
    } finally {
      myWorkerPool?.stop();
    }
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
