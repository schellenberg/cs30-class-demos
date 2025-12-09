function wordCount(wordArray) {
  let theMap = new Map();
  for (let word of wordArray) {
    if (theMap.has(word)) {
      //seen this word before
      let timesSeen = theMap.get(word);
      theMap.set(word, timesSeen + 1);
    }
    else {
      //haven't seen the word before
      theMap.set(word, 1);
    }
  }
  return theMap;
}