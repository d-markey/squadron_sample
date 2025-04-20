import 'package:dio/dio.dart';
import 'package:squadron/squadron.dart';

import '../logging_service.dart';
import '_gen/http_service.activator.g.dart';

part '_gen/http_service.worker.g.dart';

@SquadronService(baseUrl: '~/workers')
class HttpService {
  HttpService(@localWorker this.logger);

  final ILoggingService logger;

  @squadronMethod
  Future<String> get(String url) async {
    final res = await Dio().get(url);
    return res.toString();
  }
}
