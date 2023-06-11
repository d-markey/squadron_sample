import 'dart:math';

Iterable<String> generateVCDData(int maxChanges) sync* {
  final rnd = Random();
  int a = 0, b = 0, c = 0;
  int timeStamp = 0;
  while (maxChanges > 0) {
    timeStamp += 10;
    final change = rnd.nextInt(0x08);
    if (change > 0) {
      yield '#$timeStamp';
      if (maxChanges > 0 && change & 0x01 != 0) {
        maxChanges--;
        a = 1 - a;
        yield '$a a';
      }
      if (maxChanges > 0 && change & 0x02 != 0) {
        maxChanges--;
        b = 1 - b;
        yield '$b b';
      }
      if (maxChanges > 0 && change & 0x04 != 0) {
        maxChanges--;
        c = 1 - c;
        yield '$c c';
      }
    }
  }
}
