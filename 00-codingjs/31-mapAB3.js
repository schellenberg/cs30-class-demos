function mapAB3(someMap) {
  if (someMap.has('a') && !someMap.has('b')) {
    someMap.set('b', someMap.get('a'));
  }
  if (!someMap.has('a') && someMap.has('b')) {
    someMap.set('a', someMap.get('b'));
  }
  return someMap;
}