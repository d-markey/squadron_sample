class SignalValues {
  SignalValues(this.timeStamp);

  static SignalValues load(Map data) {
    final sv = SignalValues(data['#']);
    final map = data['v'] as Map;
    sv.signals.addEntries(
        map.entries.map((e) => MapEntry<String, num>(e.key, e.value)));
    return sv;
  }

  final int timeStamp;
  final Map<String, num> signals = {};

  @override
  String toString() =>
      '#$timeStamp: ${signals.entries.map((e) => '${e.key}=${e.value}')}';
}
