function allSwap(wordArray) {
  let theMap = new Map();
  for (let i = 0; i < wordArray.length; i++) {
    let word = wordArray[i];
    let first = word[0];
    if (!theMap.has(first)) {
      theMap.set(first, i);
    }
    else {
      //swap
      wordArray[i] = wordArray[theMap.get(first)];
      wordArray[theMap.get(first)] = word;
      theMap.delete(first);
    }
  }
  return wordArray;
}