import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:squadron/squadron_annotations.dart';
import 'package:squadron/squadron.dart';

import 'generic_data.dart';
import 'marshallers/marshallers.dart';

import 'generated/perf.activator.g.dart';

part 'generated/perf.worker.g.dart';

@SerializeWith(personMarshaller)
class Person {
  Person(this.lastName, this.firstName, this.dob);

  final String lastName;
  final String firstName;
  final DateTime dob;

  List toJson() => [lastName, firstName, dob.toIso8601String()];

  factory Person.fromJson(dynamic json) {
    return Person(json[0], json[1], DateTime.parse(json[2]));
  }
}

// This class is used to ensure serializers are registered in the main thread as well
// as in the worker threads. It is passed to worker threads during initialization.
class PerfContext {
  PerfContext._() {
    GenericData.registerDeserializer<Person>(Person.fromJson);
  }

  static final singleton = PerfContext._();

  factory PerfContext.fromJson(Map json) => singleton;

  Map toJson() => const {};
}

@SquadronService(baseUrl: '/workers')
class Perf extends WorkerService with $PerfOperations {
  Perf(PerfContext context);

  @SquadronMethod()
  @SerializeWith(bigIntMarshaller)
  Future<BigInt> add(
    @SerializeWith(bigIntMarshaller) BigInt a,
    @SerializeWith(bigIntMarshaller) BigInt b,
  ) async =>
      a + b;

  @SquadronMethod()
  @SerializeWith(personMarshaller)
  Future<Person> sendGenericData(GenericData<Person> personData) async =>
      personData.value!;

  @SquadronMethod()
  @SerializeWith(personMarshaller)
  Future<Person> sendGenericDataAsJson(String json) async {
    final personData = GenericData<Person>.fromJson(jsonDecode(json));
    return personData.value!;
  }

  @SquadronMethod()
  Future<List<int>> negateWithListInput(
          @SerializeWith(intListAsBufferMarshaller) List<int> data) async =>
      data.map((n) => -n).toList();

  @SquadronMethod()
  Future<List<int>> negateWithByteBufferInput(
          @SerializeWith(intListAsBufferMarshaller) List<int> data) async =>
      data.map((n) => -n).toList();

  @SquadronMethod()
  Future<List<int>> negateWithStringInput(
          @SerializeWith(intListAsStringMarshaller) List<int> data) async =>
      data.map((n) => -n).toList();

  @SquadronMethod()
  Future<List<int>> negateWithListOutput(List<int> data) async =>
      data.map((n) => -n).toList();

  @SquadronMethod()
  Future<ByteBuffer> negateWithByteBufferOutput(List<int> data) async =>
      Int32List.fromList(data.map((n) => -n).toList()).buffer;

  @SquadronMethod()
  Future<String> negateWithJsonOutput(List<int> data) async =>
      jsonEncode(data.map((n) => -n).toList());
}
