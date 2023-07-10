// GENERATED CODE - DO NOT MODIFY BY HAND

part of '../json_service.dart';

// **************************************************************************
// Generator: WorkerGenerator 2.4.1
// **************************************************************************

/// WorkerService class for JsonService
class _$JsonServiceWorkerService extends JsonService implements WorkerService {
  _$JsonServiceWorkerService() : super();

  @override
  Map<int, CommandHandler> get operations => _operations;

  late final Map<int, CommandHandler> _operations = {
    _$decodeId: ($) => decode($.args[0]),
    _$hydrateId: ($) async =>
        (const PersonMarshaller()).marshall((await hydrate($.args[0])))
  };

  static const int _$decodeId = 1;
  static const int _$hydrateId = 2;
}

/// Service initializer for JsonService
WorkerService $JsonServiceInitializer(WorkerRequest startRequest) =>
    _$JsonServiceWorkerService();

/// Operations map for JsonService
@Deprecated(
    'squadron_builder now supports "plain old Dart objects" as services. '
    'Services do not need to derive from WorkerService nor do they need to mix in '
    'with \$JsonServiceOperations anymore.')
mixin $JsonServiceOperations on WorkerService {
  @override
  // not needed anymore, generated for compatibility with previous versions of squadron_builder
  Map<int, CommandHandler> get operations => WorkerService.noOperations;
}

/// Worker for JsonService
class JsonServiceWorker extends Worker implements JsonService {
  JsonServiceWorker({PlatformWorkerHook? platformWorkerHook})
      : super($JsonServiceActivator, platformWorkerHook: platformWorkerHook);

  @override
  Future<dynamic> decode(String source) =>
      send(_$JsonServiceWorkerService._$decodeId, args: [source]);

  @override
  Future<Person> hydrate(String source) =>
      send(_$JsonServiceWorkerService._$hydrateId, args: [source])
          .then((_) => (const PersonMarshaller()).unmarshall(_));
}

/// Worker pool for JsonService
class JsonServiceWorkerPool extends WorkerPool<JsonServiceWorker>
    implements JsonService {
  JsonServiceWorkerPool(
      {ConcurrencySettings? concurrencySettings,
      PlatformWorkerHook? platformWorkerHook})
      : super(() => JsonServiceWorker(platformWorkerHook: platformWorkerHook),
            concurrencySettings: concurrencySettings);

  @override
  Future<dynamic> decode(String source) => execute((w) => w.decode(source));

  @override
  Future<Person> hydrate(String source) => execute((w) => w.hydrate(source));
}
