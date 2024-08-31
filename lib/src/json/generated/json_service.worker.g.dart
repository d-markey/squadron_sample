// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../json_service.dart';

// **************************************************************************
// Generator: WorkerGenerator 6.0.0
// **************************************************************************

/// WorkerService class for JsonService
class _$JsonServiceWorkerService extends JsonService implements WorkerService {
  _$JsonServiceWorkerService() : super();

  @override
  Map<int, CommandHandler> get operations => _operations;

  late final Map<int, CommandHandler> _operations =
      Map.unmodifiable(<int, CommandHandler>{
    _$decodeId: ($in) => decode($in.args[0] as String),
    _$hydrateId: ($in) async {
      final $out = await hydrate($in.args[0] as String);
      return (const PersonMarshaler()).marshal($out);
    },
  });

  static const int _$decodeId = 1;
  static const int _$hydrateId = 2;
}

/// Service initializer for JsonService
WorkerService $JsonServiceInitializer(WorkerRequest $in) =>
    _$JsonServiceWorkerService();

/// Worker for JsonService
class JsonServiceWorker extends Worker implements JsonService {
  JsonServiceWorker({PlatformThreadHook? threadHook})
      : super($JsonServiceActivator, threadHook: threadHook);

  @override
  Future<dynamic> decode(String source) =>
      send(_$JsonServiceWorkerService._$decodeId, args: [source]);

  @override
  Future<Person> hydrate(String source) =>
      send(_$JsonServiceWorkerService._$hydrateId, args: [source])
          .then(($x) => (const PersonMarshaler()).unmarshal($x));
}

/// Worker pool for JsonService
class JsonServiceWorkerPool extends WorkerPool<JsonServiceWorker>
    implements JsonService {
  JsonServiceWorkerPool(
      {ConcurrencySettings? concurrencySettings,
      PlatformThreadHook? threadHook})
      : super(() => JsonServiceWorker(threadHook: threadHook),
            concurrencySettings: concurrencySettings);

  @override
  Future<dynamic> decode(String source) => execute((w) => w.decode(source));

  @override
  Future<Person> hydrate(String source) => execute((w) => w.hydrate(source));
}
