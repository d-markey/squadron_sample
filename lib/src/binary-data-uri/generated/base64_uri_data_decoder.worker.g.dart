// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../base64_uri_data_decoder.dart';

// **************************************************************************
// Generator: WorkerGenerator 2.4.1
// **************************************************************************

/// WorkerService class for Base64UriDataDecoder
class _$Base64UriDataDecoderWorkerService extends Base64UriDataDecoder
    implements WorkerService {
  _$Base64UriDataDecoderWorkerService() : super();

  @override
  Map<int, CommandHandler> get operations => _operations;

  late final Map<int, CommandHandler> _operations = {
    _$decodeId: ($) async =>
        (await decode($.args[0], mimeType: $.args[1])).marshal()
  };

  static const int _$decodeId = 1;
}

/// Service initializer for Base64UriDataDecoder
WorkerService $Base64UriDataDecoderInitializer(WorkerRequest startRequest) =>
    _$Base64UriDataDecoderWorkerService();

/// Operations map for Base64UriDataDecoder
@Deprecated(
    'squadron_builder now supports "plain old Dart objects" as services. '
    'Services do not need to derive from WorkerService nor do they need to mix in '
    'with \$Base64UriDataDecoderOperations anymore.')
mixin $Base64UriDataDecoderOperations on WorkerService {
  @override
  // not needed anymore, generated for compatibility with previous versions of squadron_builder
  Map<int, CommandHandler> get operations => WorkerService.noOperations;
}

/// Worker for Base64UriDataDecoder
class Base64UriDataDecoderWorker extends Worker
    implements Base64UriDataDecoder {
  Base64UriDataDecoderWorker({PlatformWorkerHook? platformWorkerHook})
      : super($Base64UriDataDecoderActivator,
            platformWorkerHook: platformWorkerHook);

  @override
  Future<BinaryUriData> decode(String base64Data,
          {String mimeType = 'application/octet-stream'}) =>
      send(_$Base64UriDataDecoderWorkerService._$decodeId,
          args: [base64Data, mimeType]).then((_) => BinaryUriData.unmarshal(_));
}

/// Worker pool for Base64UriDataDecoder
class Base64UriDataDecoderWorkerPool
    extends WorkerPool<Base64UriDataDecoderWorker>
    implements Base64UriDataDecoder {
  Base64UriDataDecoderWorkerPool(
      {ConcurrencySettings? concurrencySettings,
      PlatformWorkerHook? platformWorkerHook})
      : super(
            () => Base64UriDataDecoderWorker(
                platformWorkerHook: platformWorkerHook),
            concurrencySettings: concurrencySettings);

  @override
  Future<BinaryUriData> decode(String base64Data,
          {String mimeType = 'application/octet-stream'}) =>
      execute((w) => w.decode(base64Data, mimeType: mimeType));
}
