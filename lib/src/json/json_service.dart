import 'dart:async';
import 'dart:convert' show jsonDecode;

import 'package:squadron/squadron.dart';
import 'package:squadron/squadron_annotations.dart';

import 'generated/json_service.activator.g.dart';
import 'marshallers/person_marshaller.dart';
import 'model/person.dart';

part 'generated/json_service.worker.g.dart';

@SquadronService(baseUrl: '/workers')
@UseLogger(ParentSquadronLogger)
class JsonService extends WorkerService with $JsonServiceOperations {
  @SquadronMethod()
  Future<dynamic> decode(String source) async {
    Squadron.info('   deserializing source, length = ${source.length}...');
    final sw = Stopwatch()..start();
    final res = jsonDecode(source);
    Squadron.info(
        '   deserialized source as ${res.runtimeType} in ${sw.elapsedMilliseconds} ms');
    return res;
  }

  @SquadronMethod()
  Future<Person> hydrate(String source) async {
    Squadron.info('   deserializing source, length = ${source.length}...');
    final sw = Stopwatch()..start();
    final res = jsonDecode(source);
    Squadron.info(
        '   deserialized source as ${res.runtimeType} in ${sw.elapsedMilliseconds} ms');

    Squadron.info('   hydrating Person...');
    sw.reset();
    final person = Person.fromJson(res);
    Squadron.info('   hydrated Person in ${sw.elapsedMilliseconds} ms');
    return person;
  }
}
