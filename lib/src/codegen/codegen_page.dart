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
  _CodeGenPageState() {
    _worker.start();
  }

  final _worker = CodeGenWorker();

  @override
  void dispose() {
    _worker.stop();
    super.dispose();
  }

  String result = '';

  Future _execWithWorker() async {
    result = '';
    final n = await _worker.inc(42);
    setState(() {
      result = n.toString();
    });
  }

  Future _execWithWorkerPool() async {
    final pool = CodeGenWorkerPool(
        concurrencySettings: ConcurrencySettings.threeCpuThreads);
    await pool.start();
    final n = await pool.inc(42);
    pool.stop();
    setState(() {
      result = n.toString();
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
                result.isEmpty ? '<no result yet>' : result,
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
