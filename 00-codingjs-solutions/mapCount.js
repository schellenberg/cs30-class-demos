function mapCount(someMap) {
  let theNumber = 0;
  if (someMap.has("a")) {
    theNumber++;
  }
  if (someMap.has("b")) {
    theNumber++;
  }
  if (someMap.has("c")) {
    theNumber++;
  }
  return theNumber;
}