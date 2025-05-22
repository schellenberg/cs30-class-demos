function firstSwap(wordArray) {
  let theMap = new Map();
  for (let i = 0; i < wordArray.length; i++) {
    let first = wordArray[i][0];
    if (theMap.has(first)) {
      if (theMap.get(first) >= 0) {
        //swap
        let swapLocation = theMap.get(first);
        let temp = wordArray[i];
        wordArray[i] = wordArray[swapLocation];
        wordArray[swapLocation] = temp;

        //ignore future swap options
        theMap.set(first, -1);
      }
    }
    else {
      theMap.set(first, i);
    }
  }
  return wordArray;
}