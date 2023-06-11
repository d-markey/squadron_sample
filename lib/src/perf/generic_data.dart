class GenericData<T> {
  GenericData(this.name, this.value);

  final String name;
  final T? value;

  Map toJson() {
    final json = {};
    json['n'] = name;
    if (value != null) {
      try {
        json['v'] = (value as dynamic).toJson();
      } catch (_) {
        json['v'] = value;
      }
    }
    return json;
  }

  static final Map<Type, dynamic Function(dynamic)> _deserializers = {};

  static void registerDeserializer<X>(X Function(dynamic) deserializer) {
    _deserializers[X] = deserializer;
  }

  factory GenericData.fromJson(Map json) {
    final name = json['n'];
    dynamic value = json['v'];
    if (value == null) {
      return GenericData<T>(name, null);
    } else {
      final deserializer = _deserializers[T];
      if (deserializer != null) {
        try {
          value = deserializer(value) as T;
        } catch (_) {}
      }
      return GenericData<T>(name, value);
    }
  }
}
