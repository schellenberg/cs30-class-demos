function wordCount(wordArray) {
  let myMap = new Map();
  for (let word of wordArray) {
    if (myMap.has(word)) {
      //already seen this one
      let count = myMap.get(word);
      myMap.set(word, count+1);
    }
    else {
      //haven't seen this word before
      myMap.set(word, 1);
    }
  }
  return myMap;
}