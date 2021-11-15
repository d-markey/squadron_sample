# squadron_sample

Flutter demo for Squadron: parallel computation of hexadecimal digits of Pi.

See [Squadron Dart package](https://pub.dev/packages/squadron) for more information on Squadron.

# Quick Introduction

The source code should be easy to understand:

* `pi_digits_service.dart` implements the math to compute hexadecimal digits of Pi based on the [Bailey–Borwein–Plouffe formula](https://en.wikipedia.org/wiki/Bailey%E2%80%93Borwein%E2%80%93Plouffe_formula).

* `pi_digits_worker.dart` implements the code used to proxy calls from the main thread to the platform workers (`Isolate`s in native scenarios, `WebWorker`s in browser environment).

* `pi_worker_pool.dart` implements the worker pool depending on the target platform (browser or native). It will instantiate workers either from `browser/pi_worker.dart` or from `vm/pi_worker.dart` via the corresponding `pi_worker_activator.dart`.

* `browser/pi_worker.dart` and `vm/pi_worker.dart` install and run the worker for their respective platform, relying on the service implemented in `pi_digits_service.dart`.

Squadron takes care of all the rest: bootstrapping the workers, communicating to/from the workers, distributing tasks to the worker service.

The main app uses the worker pool to have 5,000 digits of Pi computed in parallel (see `_loadDigitsWithWorkerPool()` in `home_page.dart`).

*NOTE FOR WEB PLATFORM:* the Worker must be compiled manually before running the app:

```
dart compile js ./lib/src/browser/pi_worker.dart -o ./web/pi_worker.dart.js -m
```
