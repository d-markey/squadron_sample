import 'package:squadron/squadron.dart';

import '../../../root_logger.dart';
import '../../_helpers/thread_location.web.dart';
import '../pi_digits_service.dart';

void main() {
  rootLogger
      .i('pi_digits_worker THREAD = $threadId, running from $threadLocation');
  run((startRequest) => PiDigitsServiceImpl());
}
