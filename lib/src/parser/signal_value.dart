class SignalValue {
  SignalValue(this.timeStamp, this.name, this.value);

  static SignalValue load(Map data) =>
      SignalValue(data['#'], data['n'], data['v']);

  final int timeStamp;
  final String name;
  final num value;

  @override
  String toString() => '#$timeStamp: $name = $value';
}
