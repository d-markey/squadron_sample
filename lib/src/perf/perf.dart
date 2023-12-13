import 'dart:async';
import 'dart:convert';
import 'dart:typed_data';

import 'package:squadron/squadron.dart';
import 'package:squadron/squadron_annotations.dart';

import 'generated/perf.activator.g.dart';
import 'generic_data.dart';
import 'marshalers/marshalers.dart';

part 'generated/perf.worker.g.dart';

@SerializeWith(personMarshaler)
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
class Perf {
  Perf(PerfContext context);

  @SquadronMethod()
  @SerializeWith(bigIntMarshaler)
  Future<BigInt> add(
    @SerializeWith(bigIntMarshaler) BigInt a,
    @SerializeWith(bigIntMarshaler) BigInt b,
  ) async =>
      a + b;

  @SquadronMethod()
  // @SerializeWith(personMarshaler)
  Future<Person> sendGenericData(GenericData<Person> personData) async =>
      personData.value!;

  @SquadronMethod()
  // @SerializeWith(personMarshaler)
  Future<Person> sendGenericDataAsJson(String json) async {
    final personData = GenericData<Person>.fromJson(jsonDecode(json));
    return personData.value!;
  }

  @SquadronMethod()
  Future<List<int>> negateWithListInput(
          @SerializeWith(intListAsBufferMarshaler) List<int> data) async =>
      data.map((n) => -n).toList();

  @SquadronMethod()
  Future<List<int>> negateWithByteBufferInput(
          @SerializeWith(intListAsBufferMarshaler) List<int> data) async =>
      data.map((n) => -n).toList();

  @SquadronMethod()
  Future<List<int>> negateWithStringInput(
          @SerializeWith(intListAsStringMarshaler) List<int> data) async =>
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

  @SquadronMethod(inspectRequest: true, inspectResponse: true)
  Future<Map<String, dynamic>> native_inspect(
          Map<String, dynamic> data) async =>
      data;

  @SquadronMethod()
  Future<Map<String, dynamic>> native(Map<String, dynamic> data) async => data;
}
