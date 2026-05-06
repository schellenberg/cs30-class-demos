function wordCount(wordArray) {
  let theMap = new Map();
  for (let word of wordArray) {
    if (!theMap.has(word)) {
      theMap.set(word, 1);
    }
    else {
      let times = theMap.get(word);
      theMap.set(word, times+1);
    }
  }
  return theMap;
}