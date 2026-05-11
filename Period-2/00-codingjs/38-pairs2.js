function pairs2(wordArray) {
  let myMap = new Map();
  for (let word of wordArray) {
    let last = word[word.length-1];
    myMap.set(last, word);
  }
  return myMap;
}