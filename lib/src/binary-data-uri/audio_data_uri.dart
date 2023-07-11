class AudioDataUri implements Uri {
  AudioDataUri(String base64Audio, {String mimeType = 'audio/mp3'})
      : _pathStart = 'data:$mimeType;'.length,
        contentText = 'data:$mimeType;base64,$base64Audio';

  final int _pathStart;
  final String contentText;

  @override
  String get authority => '';

  @override
  UriData? get data =>
      null; // access to the decoded bytes is not needed from Dart-land!

  @override
  String get fragment => '';

  @override
  bool get hasAbsolutePath => false;

  @override
  bool get hasAuthority => false;

  @override
  bool get hasEmptyPath => false;

  @override
  bool get hasFragment => false;

  @override
  bool get hasPort => false;

  @override
  bool get hasQuery => false;

  @override
  bool get hasScheme => true;

  @override
  String get host => '';

  @override
  bool get isAbsolute => false;

  @override
  bool isScheme(String scheme) => scheme.toLowerCase().compareTo('data') == 0;

  @override
  Uri normalizePath() => this;

  @override
  String get origin => '';

  @override
  String get path => contentText.substring(_pathStart);

  @override
  List<String> get pathSegments => [path];

  @override
  int get port => 0;

  @override
  String get query => '';

  @override
  Map<String, String> get queryParameters => const {};

  @override
  Map<String, List<String>> get queryParametersAll => const {};

  @override
  Uri removeFragment() => this;

  @override
  Uri replace(
      {String? scheme,
      String? userInfo,
      String? host,
      int? port,
      String? path,
      Iterable<String>? pathSegments,
      String? query,
      Map<String, dynamic>? queryParameters,
      String? fragment}) {
    throw UnimplementedError();
  }

  @override
  Uri resolve(String reference) => this;

  @override
  Uri resolveUri(Uri reference) => this;

  @override
  String get scheme => 'data';

  @override
  String toFilePath({bool? windows}) {
    throw UnimplementedError();
  }

  @override
  String get userInfo => '';

  @override
  String toString() => contentText;
}
