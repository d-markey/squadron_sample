import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import 'generic_data.dart';
import 'perf.dart';

class PerfPage extends StatefulWidget {
  const PerfPage({super.key, this.tabBar});

  final TabBar? tabBar;

  @override
  State<PerfPage> createState() => _PerfPageState();
}

class _PerfPageState extends State<PerfPage> {
  _PerfPageState();

  final _service = Perf(PerfContext.singleton);
  final _worker = PerfWorker(PerfContext.singleton);
  final _workerPool = PerfWorkerPool(PerfContext.singleton,
      concurrencySettings:
          const ConcurrencySettings(minWorkers: 3, maxWorkers: 3));

  @override
  void initState() {
    _worker.start();
    _workerPool.start();
    super.initState();
  }

  @override
  void dispose() {
    _worker.stop();
    _workerPool.stop();
    super.dispose();
  }

  int? result;

  Future _execWith(Perf perfTester) async {
    final sw = Stopwatch();
    final futures = <Future>[];
    const len = 1000, loops = 100;

    void reset() {
      futures.clear();
      sw
        ..reset()
        ..start();
    }

    void checkBigInt(BigInt res, BigInt expected) async {
      await Future.delayed(Duration.zero);
      if (res != expected) {
        Squadron.info('woops');
      }
    }

    var a = BigInt.zero;
    var b = BigInt.zero;
    reset();
    for (var i = 0; i < loops; i++) {
      a = a + BigInt.one;
      b = BigInt.zero;
      for (var j = 0; j < loops; j++) {
        b = b + BigInt.one;
        // capture current values
        var x = a, y = b;
        var sum = a + b;
        futures.add(perfTester.add(x, y).then((res) => checkBigInt(res, sum)));
      }
    }
    Squadron.info(
        '[${perfTester.runtimeType}] add bigInts in progress (${sw.elapsed})');
    await Future.wait(futures);
    sw.stop();
    Squadron.info('[${perfTester.runtimeType}] add bigInts: ${sw.elapsed}');

    final me = Person('DOE', 'John', DateTime(1980, 01, 01));
    void checkPerson(Person res) async {
      await Future.delayed(Duration.zero);
      if (res.lastName != me.lastName ||
          res.firstName != me.firstName ||
          res.dob != me.dob) {
        Squadron.info('woops');
      }
    }

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester
          .sendGenericData(GenericData('whatever', me))
          .then(checkPerson));
    }
    await Future.wait(futures);
    sw.stop();
    Squadron.info('[${perfTester.runtimeType}] sendGenericData: ${sw.elapsed}');

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester
          .sendGenericDataAsJson(
              jsonEncode(GenericData('whatever', me).toJson()))
          .then(checkPerson));
    }
    await Future.wait(futures);
    sw.stop();
    Squadron.info(
        '[${perfTester.runtimeType}] sendGenericDataAsJson: ${sw.elapsed}');

    final list = List<int>.generate(len, (i) => i + 1);
    void checkList(List res) async {
      await Future.delayed(Duration.zero);
      if (res.length != len || res.first > 0) {
        Squadron.info('woops');
      }
    }

    // measure perf when sending argments

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester.negateWithListInput(list).then(checkList));
    }
    await Future.wait(futures);
    sw.stop();
    Squadron.info('[${perfTester.runtimeType}] in list: ${sw.elapsed}');

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester.negateWithByteBufferInput(list).then(checkList));
    }
    await Future.wait(futures);
    sw.stop();
    Squadron.info('[${perfTester.runtimeType}] in buffer: ${sw.elapsed}');

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester.negateWithStringInput(list).then(checkList));
    }
    await Future.wait(futures);
    sw.stop();
    Squadron.info('[${perfTester.runtimeType}] in json: ${sw.elapsed}');

    // measure perf when receiving results

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester.negateWithListOutput(list).then(checkList));
    }
    await Future.wait(futures);
    sw.stop();
    Squadron.info('[${perfTester.runtimeType}] out list: ${sw.elapsed}');

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester
          .negateWithByteBufferOutput(list)
          .then((buffer) => buffer.asInt32List())
          .then(checkList));
    }
    await Future.wait(futures);
    sw.stop();
    Squadron.info('[${perfTester.runtimeType}] out buffer: ${sw.elapsed}');

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester
          .negateWithJsonOutput(list)
          .then((json) => jsonDecode(json).cast<int>().toList() as List<int>)
          .then(checkList));
    }
    await Future.wait(futures);
    sw.stop();
    Squadron.info('[${perfTester.runtimeType}] out json: ${sw.elapsed}');

    // native data structures
    const keys = 'abcdefghijklmnopqrstuvwxyz';

    final dataIn = Map.fromIterables(
        List.generate(keys.length, (index) => keys[index]),
        List.generate(keys.length, (index) => List.filled(index * len, 0)));
    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester.native(dataIn));
    }
    await Future.wait(futures);
    sw.stop();
    Squadron.info(
        '[${perfTester.runtimeType}] native with List<int>: ${sw.elapsed}');

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester.native_inspect(dataIn));
    }
    await Future.wait(futures);
    sw.stop();
    Squadron.info(
        '[${perfTester.runtimeType}] native_inspect with List<int>: ${sw.elapsed}');

    final dataIn2 = Map.fromIterables(
        List.generate(keys.length, (index) => keys[index]),
        List.generate(keys.length, (index) => Uint32List(index * len)));
    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester.native(dataIn2));
    }
    await Future.wait(futures);
    sw.stop();
    Squadron.info(
        '[${perfTester.runtimeType}] native with Uint32List: ${sw.elapsed}');

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester.native_inspect(dataIn2));
    }
    await Future.wait(futures);
    sw.stop();
    Squadron.info(
        '[${perfTester.runtimeType}] native_inspect with Uint32List: ${sw.elapsed}');
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: const Text('SQUADRON SAMPLE - PERF'),
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
            onPressed: () async {
              await _execWith(_service);
            },
            tooltip: 'No Thread',
            child: const Text('No Thread', textAlign: TextAlign.center),
          ),
          FloatingActionButton(
            onPressed: () async {
              await _execWith(_worker);
            },
            tooltip: 'Thread',
            child: const Text('Thread', textAlign: TextAlign.center),
          ),
          FloatingActionButton(
            onPressed: () async {
              await _execWith(_workerPool);
            },
            tooltip: 'Thread Pool',
            child: const Text('Thread Pool', textAlign: TextAlign.center),
          ),
        ]));
  }
}
