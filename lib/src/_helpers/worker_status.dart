import 'package:squadron/squadron.dart';

extension WorkerStatusExt on WorkerStat {
  String get status =>
      isStopped ? 'stopped' : ((workload == 0) ? 'idle' : 'working($workload)');
}
