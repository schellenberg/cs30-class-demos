function firstChar(wordArray) {
  let theMap = new Map();
  for (let word of wordArray) {
    let first = word[0];
    if (theMap.has(first)) {
      //seen this letter before
      let oldWord = theMap.get(first);
      let newWord = oldWord + word;
      theMap.set(first, newWord);
    }
    else {
      //haven't seen the letter before
      theMap.set(first, word);
    }
  }
  return theMap;
}