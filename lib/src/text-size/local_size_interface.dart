import 'dart:async';

import 'package:squadron/squadron.dart';

part '_gen/local_size_interface.worker.g.dart';

// local services should be based on interfaces, because implementations are
// likely to import libraries that are not available when compiling workers
// that use those local services (such as `dart:ui` or some Flutter libs).

@localService
abstract interface class ILocalSize {
  @squadronMethod
  FutureOr<Map<String, double>> measure(String text, {int? maxLines});
}
