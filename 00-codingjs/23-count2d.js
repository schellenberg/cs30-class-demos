function count2d(someArray) {
  let counter = 0;
  for (let row of someArray) {
    for (let number of row) {
      counter++;
    }
  }
  return counter;
}