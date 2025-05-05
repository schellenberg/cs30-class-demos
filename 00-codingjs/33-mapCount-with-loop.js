function mapCount(someMap) {
  let counter = 0;
  let thingsToCheck = ["a", "b", "c"];
  for (let check of thingsToCheck) {
    if (someMap.has(check)) {
      counter++;
    }
  }
  return counter;
}