import 'dart:async';

import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import 'codegen.dart';

class CodeGenPage extends StatefulWidget {
  const CodeGenPage({Key? key, this.tabBar}) : super(key: key);

  final TabBar? tabBar;

  @override
  State<CodeGenPage> createState() => _CodeGenPageState();
}

class _CodeGenPageState extends State<CodeGenPage> {
  _CodeGenPageState();

  int? result;

  Future _execWithWorker() async {
    final worker = CodeGenWorker();
    await worker.start();
    final n = await worker.service1(42);
    worker.stop();
    setState(() {
      result = n;
    });
  }

  Future _execWithWorkerPool() async {
    final pool = CodeGenWorkerPool(
        concurrencySettings: ConcurrencySettings.threeCpuThreads);
    await pool.start();
    final n = await pool.service1(42);
    pool.stop();
    setState(() {
      result = n;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('SQUADRON SAMPLE - CODE GEN'),
          bottom: widget.tabBar,
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                result?.toString() ?? '<no result yet>',
              ),
            ],
          ),
        ),
        floatingActionButton:
            Row(mainAxisAlignment: MainAxisAlignment.end, children: [
          FloatingActionButton(
            onPressed: _execWithWorker,
            tooltip: 'No Pool',
            child: const Text('No Pool', textAlign: TextAlign.center),
          ),
          FloatingActionButton(
            onPressed: _execWithWorkerPool,
            tooltip: 'Pool',
            child: const Text('Pool', textAlign: TextAlign.center),
          ),
        ]));
  }
}
