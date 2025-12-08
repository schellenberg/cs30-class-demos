function wordLen(wordArray) {
  let theMap = new Map();
  for (let word of wordArray) {
    theMap.set(word, word.length);
  }
  return theMap;
}