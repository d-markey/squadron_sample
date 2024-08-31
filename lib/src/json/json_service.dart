import 'dart:async';
import 'dart:convert' show jsonDecode;

import 'package:squadron/squadron.dart';
import 'package:squadron_sample/web.g.dart';

import '../../root_logger.dart';
import 'generated/json_service.activator.g.dart';
import 'marshalers/person_marshaler.dart';
import 'model/person.dart';

part 'generated/json_service.worker.g.dart';

@SquadronService(baseUrl: '/workers', wasm: workerExt == 'wasm')
class JsonService {
  @SquadronMethod()
  Future<dynamic> decode(String source) async {
    rootLogger.i('   deserializing source, length = ${source.length}...');
    final sw = Stopwatch()..start();
    final res = jsonDecode(source);
    rootLogger.i(
        '   deserialized source as ${res.runtimeType} in ${sw.elapsedMilliseconds} ms');
    return res;
  }

  @SquadronMethod()
  Future<Person> hydrate(String source) async {
    rootLogger.i('   deserializing source, length = ${source.length}...');
    final sw = Stopwatch()..start();
    final res = jsonDecode(source);
    rootLogger.i(
        '   deserialized source as ${res.runtimeType} in ${sw.elapsedMilliseconds} ms');

    rootLogger.i('   hydrating Person...');
    sw.reset();
    final person = Person.fromJson(res);
    rootLogger.i('   hydrated Person in ${sw.elapsedMilliseconds} ms');
    return person;
  }
}
