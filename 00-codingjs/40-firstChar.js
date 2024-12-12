function firstChar(wordArray) {
  let charMap = new Map();
  for (let word of wordArray) {
    let first = word[0];
    if (charMap.has(first)) {
      //concatenate values
      let oldValue = charMap.get(first);
      let newValue = oldValue + word;
      charMap.set(first, newValue);
    }
    else {
      charMap.set(first, word);
    }
  }
  return charMap;
}