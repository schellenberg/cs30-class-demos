function mapCount(someMap) {
  let counter = 0;
  if (someMap.has("a")) {
    counter++;
  }
  if (someMap.has("b")) {
    counter++;
  }
  if (someMap.has("c")) {
    counter++;
  }
  return counter;
}