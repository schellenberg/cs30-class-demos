function wordLen(wordArray) {
  let myMap = new Map();
  for (let word of wordArray) {
    let theLength = word.length;
    myMap.set(word, theLength);
  }
  return myMap;
}