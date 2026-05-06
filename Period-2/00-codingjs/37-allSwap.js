function allSwap(wordArray) {
  let theMap = new Map();
  for (let index = 0; index < wordArray.length; index++) {
    let word = wordArray[index];
    let first = word[0];
    if (!theMap.has(first)) {
      theMap.set(first, index);
    }
    else {
      let temp = wordArray[index];
      wordArray[index] = wordArray[theMap.get(first)];
      wordArray[theMap.get(first)] = temp;
      theMap.delete(first);
    }
  }
  return wordArray;
}