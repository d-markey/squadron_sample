// Web worker implementation (browser patform)

// TO ACTUALLY SEE THE WEB WORKER IN ACTION, THE DART SOURCE CODE MUST BE COMPILED TO JAVASCRIPT MANUALLY
// WHENEVER THE WEB WORKER DEPENDANT FILES ARE MODIFIED, RECOMPILATION IS REQUIRED
//
// to compile the thumbnail_worker.dart to JavaScript, run the following command line:
//
//       dart compile js ./lib/src/browser/thumbnail_worker.dart -o ./web/thumbnail_worker.dart.js
//
// or (to minify generated JS source code):
//
//       dart compile js ./lib/src/browser/thumbnail_worker.dart -o ./web/thumbnail_worker.dart.js -m
//
// Of course, this can be automated in a release script (shell, batch or PowerShell depending on your dev platform)

import 'package:squadron/squadron_service.dart';

import '../thumbnail_service.dart';

void main() => run((startRequest) => ThumbnailServiceImpl()); 
