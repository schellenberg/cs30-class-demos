function wordAppend(wordArray) {
  let result = "";
  let theMap = new Map();
  for (let word of wordArray) {
    if (theMap.has(word)) {
      result = result + word;
      theMap.delete(word);
    }
    else {
      theMap.set(word, 1);
    }
  }
  return result;
}