function pairs(wordArray) {
  let myMap = new Map();
  for (let word of wordArray) {
    let first = word[0];
    let last = word[word.length - 1];
    myMap.set(first, last);
  }
  return myMap;
}