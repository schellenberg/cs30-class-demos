function firstChar(wordArray) {
  let charMap = new Map();
  for (let word of wordArray) {
    let firstLetter = word[0];
    if (charMap.has(firstLetter)) {
      //tack on this value to the end
      let old = charMap.get(firstLetter);
      charMap.set(firstLetter, old + word);
    }
    else {
      //first time it's seen
      charMap.set(firstLetter, word);
    }
  }
  return charMap;
}