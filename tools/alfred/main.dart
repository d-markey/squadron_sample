// ignore_for_file: avoid_print

import 'dart:io';

import 'package:alfred/alfred.dart';

void main() async {
  final app = Alfred();

  var webBuild = Directory('build/web');
  if (!webBuild.existsSync()) {
    print('${webBuild.path} does not exist.');
    print('current = ${Directory.current.path}');
    return;
  }

  app.get('/*', (req, res) => webBuild);

  await app.listen();
}
