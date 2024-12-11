function pairs(wordArray) {
  let theMap = new Map();
  for (let word of wordArray) {
    let first = word[0];
    let last = word[word.length-1];
    theMap.set(first, last);
  }
  return theMap;
}