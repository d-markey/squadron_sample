import 'dart:async';
import 'dart:convert' show jsonDecode;

import 'package:squadron/squadron.dart';

import '../logging_service.dart';
import '_gen/json_service.activator.g.dart';
import 'marshalers/person_marshaler.dart';
import 'model/person.dart';

part '_gen/json_service.worker.g.dart';

@SquadronService(baseUrl: '~/workers')
class JsonService {
  JsonService(@localWorker this.logger);

  final ILoggingService logger;

  @SquadronMethod()
  Future<dynamic> decode(String source) async {
    logger.log(
        '[$threadId] [S] deserializing source, length = ${source.length}...');
    final sw = Stopwatch()..start();
    final res = jsonDecode(source);
    logger.log(
        '[$threadId] [S] deserialized source as ${res.runtimeType} in ${sw.elapsedMilliseconds} ms');
    return res;
  }

  @SquadronMethod()
  Future<Person> hydrate(String source) async {
    logger.log(
        '[$threadId] [S] deserializing source, length = ${source.length}...');
    final sw = Stopwatch()..start();
    final res = jsonDecode(source);
    logger.log(
        '[$threadId] [S] deserialized source as ${res.runtimeType} in ${sw.elapsedMilliseconds} ms');

    logger.log('[$threadId] [S] hydrating Person...');
    sw.reset();
    final person = Person.fromJson(res);
    logger
        .log('[$threadId] [S] hydrated Person in ${sw.elapsedMilliseconds} ms');
    return person;
  }
}
