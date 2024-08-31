// ignore_for_file: avoid_print

import 'dart:io';

import 'package:alfred/alfred.dart';

void main(List<String> args) async {
  final mode = args.firstOrNull ?? 'js2js';
  final app = Alfred();

  var webBuild = Directory('build/web-$mode');
  if (!webBuild.existsSync()) {
    print('${webBuild.path} does not exist.');
    print('current = ${Directory.current.path}');
    return;
  } else {
    print('Serving from ${webBuild.path}');
  }

  app.logWriter = (fn, type) {
    print('[${type.name}] ${fn()}');
  };

  Directory serveCrossOriginIsolated(HttpRequest req, HttpResponse resp) {
    resp.headers.add('Cross-Origin-Opener-Policy', 'same-origin');
    resp.headers.add('Cross-Origin-Embedder-Policy', 'credentialless');
    return webBuild;
  }

  app.get('/*', serveCrossOriginIsolated);
  app.head('/*', serveCrossOriginIsolated);

  await app.listen();
}
