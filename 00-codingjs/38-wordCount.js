function wordCount(wordArray) {
  let theMap = new Map();
  for (let word of wordArray) {
    if (theMap.has(word)) {
      //increase it
      let oldValue = theMap.get(word);
      theMap.set(word, oldValue+1);
    }
    else {
      theMap.set(word, 1);
    }
  }
  return theMap;
}