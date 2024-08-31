# squadron_sample

Flutter demo for Squadron with sample use-cases:
* parallel computation of hexadecimal digits of Pi.
* parallel thumbnail generation

Also includes a minimal example of using Squadron annotations together with [squadron_builder](https://pub.dev/packages/squadron_builder) to generate the actual Web Worker/Isolate workers and pools.

See [Squadron Dart package](https://pub.dev/packages/squadron) for more information on Squadron.

# Pi Digits

The source code should be easy to understand:

* `pi_digits_service.dart` implements the math to compute hexadecimal digits of Pi based on the [Bailey–Borwein–Plouffe formula](https://en.wikipedia.org/wiki/Bailey%E2%80%93Borwein%E2%80%93Plouffe_formula).

* `pi_digits_worker.dart` implements the code used to proxy calls from the main thread to the platform workers (`Isolate`s in native scenarios, `WebWorker`s in browser environment).

* `pi_worker_pool.dart` implements the worker pool depending on the target platform (browser or native). It will instantiate workers either from `browser/pi_digits_worker.dart` or from `vm/pi_digits_worker.dart` via the corresponding `pi_digits_worker_activator.dart`.

* `browser/pi_digits_worker.dart` and `vm/pi_digits_worker.dart` install and run the worker for their respective platform, relying on the service implemented in `pi_digits_service.dart`.

Squadron takes care of all the rest: bootstrapping the workers, communicating to/from the workers, distributing tasks to the worker service, cancellation notifications...

The main app uses the worker pool to have 5,000 digits of Pi computed in parallel (see `_loadDigitsWithWorkerPool()` in `pi_digits_page.dart`).

# Thumbnails

The structure of the code is very similar to that for pi digits:

* `thumbnail_service.dart` implements the generation of the thumbnail via [image](https://pub.dev/packages/image).

* `thumbnail_worker.dart` implements the code used to proxy calls from the main thread to the platform workers (`Isolate`s in native scenarios, `WebWorker`s in browser environment).

* `thumbnail_pool.dart` implements the worker pool depending on the target platform (browser or native). It will instantiate workers either from `browser/thumbnail_worker.dart` or from `vm/thumbnail_worker.dart` via the corresponding `thumbnail_worker_activator.dart`.

* `browser/thumbnail_worker.dart` and `vm/thumbnail_worker.dart` install and run the worker for their respective platform, relying on the service implemented in `thumbnail_service.dart`.

Squadron takes care of all the rest: bootstrapping the workers, communicating to/from the workers, distributing tasks to the worker service, cancellation notifications...

The main app uses the Flutter icon as a sample image. In a production app, you'd ask the user to pick images or take pictures with the camera.

# Codegen and Perf

Provided as examples of code generation using Squadron annotations with `squadron_builder`.

`Codegen` is a basic example while `Perf` leverages more advanced features such as platform-specific marshallers to try and control serialization overhead.

To generate the code for workers and worker pools, run the following command:

```
dart run build_runner build
```

# Parser, Parser1 and Parser2

Various attempts at parsing a (somewhat large) `Value Change Dump` dataset (see https://en.wikipedia.org/wiki/Value_change_dump). 

# Note

This sample must be built using:

```
dart run build_runner build
```

Before running the Web-version of the sample, the Web workers must also be compiled. The sample provides a script to automate building the Web workers, cf. `build_web_worker.bat`. Rebuilding Web Workers is mandatory whenever a worker service or one of its dependencies has been modified or updated.
