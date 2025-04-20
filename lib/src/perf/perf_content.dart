import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:squadron/squadron.dart';

import '../_helpers/page_content.dart';
import '../logging_service.dart';
import 'generic_data.dart';
import 'perf.dart';

class PerfContent extends PageContent {
  PerfContent() : super('SQUADRON SAMPLE - PERF');

  final _service = Perf(PerfContext.singleton);

  int? result;

  Future _execWith(Perf perfTester) async {
    final sw = Stopwatch();
    final futures = <Future>[];
    const len = 100, loops = 10;

    void reset() {
      futures.clear();
      sw
        ..reset()
        ..start();
    }

    void checkBigInt(BigInt res, BigInt expected) async {
      await Future.delayed(Duration.zero);
      if (res != expected) {
        mainLogger.log('[$threadId] [M] woops');
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
    mainLogger.log(
        '[$threadId] [M] [${perfTester.runtimeType}] 1. add bigInts in progress (${sw.elapsed})');
    await Future.wait(futures);
    sw.stop();
    mainLogger.log(
        '[$threadId] [M] [${perfTester.runtimeType}] 1. add bigInts: ${sw.elapsed}');

    final me = Person('DOE', 'John', DateTime(1980, 01, 01));
    void checkPerson(Person res) async {
      await Future.delayed(Duration.zero);
      if (res.lastName != me.lastName ||
          res.firstName != me.firstName ||
          res.dob != me.dob) {
        mainLogger.log('[$threadId] [M] woops');
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
    mainLogger.log(
        '[$threadId] [M] [${perfTester.runtimeType}] 2. sendGenericData: ${sw.elapsed}');

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester
          .sendGenericDataAsJson(
              jsonEncode(GenericData('whatever', me).toJson()))
          .then(checkPerson));
    }
    await Future.wait(futures);
    sw.stop();
    mainLogger.log(
        '[$threadId] [M] [${perfTester.runtimeType}] 3. sendGenericDataAsJson: ${sw.elapsed}');

    final list = List<int>.generate(len, (i) => i + 1);
    void checkList(List res) async {
      await Future.delayed(Duration.zero);
      if (res.length != len || res.first > 0) {
        mainLogger.log('[$threadId] [M] woops');
      }
    }

    // measure perf when sending argments

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester.negateWithListInput(list).then(checkList));
    }
    await Future.wait(futures);
    sw.stop();
    mainLogger.log(
        '[$threadId] [M] [${perfTester.runtimeType}] 4. in list: ${sw.elapsed}');

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester.negateWithByteBufferInput(list).then(checkList));
    }
    await Future.wait(futures);
    sw.stop();
    mainLogger.log(
        '[$threadId] [M] [${perfTester.runtimeType}] 5. in buffer: ${sw.elapsed}');

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester.negateWithStringInput(list).then(checkList));
    }
    await Future.wait(futures);
    sw.stop();
    mainLogger.log(
        '[$threadId] [M] [${perfTester.runtimeType}] 6. in json: ${sw.elapsed}');

    // measure perf when receiving results

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester.negateWithListOutput(list).then(checkList));
    }
    await Future.wait(futures);
    sw.stop();
    mainLogger.log(
        '[$threadId] [M] [${perfTester.runtimeType}] 7. out list: ${sw.elapsed}');

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester
          .negateWithByteBufferOutput(list)
          .then((buffer) => buffer.asInt32List())
          .then(checkList));
    }
    await Future.wait(futures);
    sw.stop();
    mainLogger.log(
        '[$threadId] [M] [${perfTester.runtimeType}] 8. out buffer: ${sw.elapsed}');

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester
          .negateWithJsonOutput(list)
          .then((json) => jsonDecode(json).cast<int>().toList() as List<int>)
          .then(checkList));
    }
    await Future.wait(futures);
    sw.stop();
    mainLogger.log(
        '[$threadId] [M] [${perfTester.runtimeType}] 9. out json: ${sw.elapsed}');

    // native data structures
    const keys = 'abcdefghijklmnopqrstuvwxyz';

    final dataIn = Map.fromIterables(
        List.generate(keys.length, (index) => keys[index]),
        List.generate(keys.length, (index) => List.filled(index * len, 0)));
    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester.noInspect(dataIn));
    }
    await Future.wait(futures);
    sw.stop();
    mainLogger.log(
        '[$threadId] [M] [${perfTester.runtimeType}] 10. native with List<int>: ${sw.elapsed}');

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester.inspect(dataIn));
    }
    await Future.wait(futures);
    sw.stop();
    mainLogger.log(
        '[$threadId] [M] [${perfTester.runtimeType}] 11. native_inspect with List<int>: ${sw.elapsed}');

    final dataIn2 = Map.fromIterables(
        List.generate(keys.length, (index) => keys[index]),
        List.generate(keys.length, (index) => Uint32List(index * len)));
    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester.noInspect(dataIn2));
    }
    await Future.wait(futures);
    sw.stop();
    mainLogger.log(
        '[$threadId] [M] [${perfTester.runtimeType}] 12. native with Uint32List: ${sw.elapsed}');

    reset();
    for (var i = 0; i < loops; i++) {
      futures.add(perfTester.inspect(dataIn2));
    }
    await Future.wait(futures);
    sw.stop();
    mainLogger.log(
        '[$threadId] [M] [${perfTester.runtimeType}] 13. native_inspect with Uint32List: ${sw.elapsed}');
  }

  @override
  Widget body() => Text(result?.toString() ?? '<no result yet>');

  Future<dynamic> _execWithService() => _execWith(_service);

  Future<dynamic> _execWithWorker() async {
    final worker = switch (getMode()) {
      SquadronPlatformType.js => PerfWorker.js(PerfContext.singleton),
      SquadronPlatformType.wasm => PerfWorker.wasm(PerfContext.singleton),
      _ => PerfWorker(PerfContext.singleton),
    };
    await worker.start();
    try {
      return await _execWith(worker);
    } finally {
      worker.stop();
    }
  }

  Future<dynamic> _execWithPool() async {
    final concurrency = ConcurrencySettings(minWorkers: 3, maxWorkers: 3);
    final pool = switch (getMode()) {
      SquadronPlatformType.js => PerfWorkerPool.js(
          PerfContext.singleton,
          concurrencySettings: concurrency,
        ),
      SquadronPlatformType.wasm => PerfWorkerPool.wasm(
          PerfContext.singleton,
          concurrencySettings: concurrency,
        ),
      _ => PerfWorkerPool(
          PerfContext.singleton,
          concurrencySettings: concurrency,
        ),
    };
    await pool.start();
    try {
      return await _execWith(pool);
    } finally {
      pool.stop();
    }
  }

  @override
  List<Widget> actions() => [
        action(onPressed: _execWithService, label: 'No Thread'),
        action(onPressed: _execWithWorker, label: 'Thread'),
        action(onPressed: _execWithPool, label: 'Thread Pool'),
      ];
}
