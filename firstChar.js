function firstChar(wordArray){
  let someMap = new Map();
  for (let i = 0; i < wordArray.length; i++) {
    if (someMap.has(wordArray[i][0])) {
      let newValue = someMap.get(wordArray[i][0]) + wordArray[i];
      someMap.set(wordArray[i][0], newValue);
    }
    else {
      someMap.set(wordArray[i][0], wordArray[i]);
    }
  }
  return someMap;
}