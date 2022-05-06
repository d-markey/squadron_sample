class SignalValue {
  SignalValue(this.timeStamp, this.name, this.value);

  final int timeStamp;
  final String name;
  final num value;

  @override
  String toString() => '#$timeStamp: $name = $value';
}
