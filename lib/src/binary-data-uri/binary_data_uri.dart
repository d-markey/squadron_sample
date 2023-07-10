import 'dart:convert';
import 'dart:typed_data';

class BinaryDataUri implements Uri {
  BinaryDataUri(this.data);

  @override
  final UriData data;

  @override
  String get authority => '';

  @override
  String get fragment => '';

  @override
  bool get hasAbsolutePath => false;

  @override
  bool get hasAuthority => false;

  @override
  bool get hasEmptyPath => true;

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
  bool isScheme(String scheme) =>
      scheme.toLowerCase().compareTo(this.scheme) == 0;

  @override
  Uri normalizePath() => this;

  @override
  String get origin => '';

  @override
  String get path =>
      Uri.encodeComponent(data.contentText.substring(scheme.length + 1));

  @override
  List<String> get pathSegments => [path];

  @override
  int get port => -1;

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
          String? fragment}) =>
      throw Exception('Unsupported');

  @override
  Uri resolve(String reference) => this;

  @override
  Uri resolveUri(Uri reference) => this;

  @override
  String get scheme => 'data';

  @override
  String toFilePath({bool? windows}) => throw Exception('Unsupported');

  @override
  String get userInfo => '';
}

class BinaryUriData implements UriData {
  BinaryUriData(this.bytes, {this.mimeType = 'application/octet-stream'}) {
    uri = BinaryDataUri(this);
  }

  final Uint8List bytes;

  @override
  final String mimeType;

  @override
  late final Uri uri;

  @override
  String get charset => ascii.name;

  @override
  Uint8List contentAsBytes() => bytes;

  @override
  String contentAsString({Encoding? encoding}) => contentText;

  @override
  String get contentText => 'data:$mimeType;base64,${base64Encode(bytes)}';

  @override
  bool get isBase64 => true;

  @override
  bool isCharset(String charset) =>
      charset.toLowerCase().compareTo('ascii') == 0;

  @override
  bool isEncoding(Encoding encoding) => true;

  @override
  bool isMimeType(String mimeType) =>
      mimeType.toLowerCase().compareTo(this.mimeType.toLowerCase()) == 0;

  @override
  Map<String, String> get parameters => const {};

  Map marshal() => {'m': mimeType, 'b': bytes};

  static BinaryUriData unmarshal(Map data) => BinaryUriData(data['b'],
      mimeType: data['m'] ?? 'application/octet-stream');
}
