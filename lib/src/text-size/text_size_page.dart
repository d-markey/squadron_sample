import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import 'size_service.dart';
import 'size_service_impl.dart';
import 'my_worker_pool.dart';

class TextSizePage extends StatefulWidget {
  TextSizePage({Key? key, this.tabBar}) : super(key: key);

  final TabBar? tabBar;

  final sizeService = LocalWorker<SizeService>.create(SizeServiceImpl());

  // instantiate a worker pool with 1 to 4 workers
  // adapt the sizing to your requirements
  late final MyWorkerPool _pool = MyWorkerPool(sizeService,
      const ConcurrencySettings(minWorkers: 1, maxWorkers: 4, maxParallel: 2));

  @override
  State<TextSizePage> createState() => _TextSizePageState();
}

class _TextSizePageState extends State<TextSizePage> {
  _TextSizePageState();

  Future _getTextsSizes() async {
    final futures = <Future>[];
    for (var i = 0; i < 4; i++) {
      futures.add(widget._pool.doSomethingWithTexts([
        'Text 1 ($i)',
        'Text 2 ($i)',
        'Longer Text #3 ($i)',
        'Multi\nLine Text'
      ]));
    }
    await Future.wait(futures);
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
