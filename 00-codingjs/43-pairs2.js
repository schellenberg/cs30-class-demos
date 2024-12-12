function pairs2(wordArray) {
  let theMap = new Map();
  for (let word of wordArray) {
    let last = word[word.length-1];
    theMap.set(last, word);
  }
  return theMap;
}