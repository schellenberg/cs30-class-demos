function pairs2(wordArray) {
  let someMap = new Map();
  for (let word of wordArray) {
    let last = word[word.length-1];
    someMap.set(last, word);
  }
  return someMap;
}