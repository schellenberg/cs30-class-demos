function wordAppend(wordArray) {
  let theMap = new Map();
  let result = "";
  for (let word of wordArray) {
    if (theMap.has(word)) {
      //seen before
      result += word;
      theMap.delete(word);
    }
    else {
      //not seen yet
      theMap.set(word, 0);
    }
  }
  return result;
}