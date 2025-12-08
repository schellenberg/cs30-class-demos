function word0(keyArray) {
  let theMap = new Map();
  for (let word of keyArray) {
    theMap.set(word, 0);
  }
  return theMap;
}