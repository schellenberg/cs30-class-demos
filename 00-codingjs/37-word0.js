function word0(keyArray) {
  let someMap = new Map();
  for (let key of keyArray) {
    someMap.set(key, 0);
  }
  return someMap;
}