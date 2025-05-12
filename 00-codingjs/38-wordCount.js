function wordCount(wordArray) {
  let mapCount = new Map();
  for (let word of wordArray) {
    if (mapCount.has(word)) {
      //if I've seen it before...
      let oldValue = mapCount.get(word);
      mapCount.set(word, oldValue + 1);
    }
    else {
      //if I haven't seen the word before
      mapCount.set(word, 1);
    }
  }
  return mapCount;
}