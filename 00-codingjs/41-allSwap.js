function allSwap(wordArray) {
  let charMap = new Map();
  for (let i = 0; i < wordArray.length; i++) {
    let first = wordArray[i][0];
    if (charMap.has(first)) {
      //swap
      let swapTo = charMap.get(first);
      let temp = wordArray[i];
      wordArray[i] = wordArray[swapTo];
      wordArray[swapTo] = temp;
      charMap.delete(first);
    }
    else {
      charMap.set(first, i);
    }
  }
  return wordArray;
}