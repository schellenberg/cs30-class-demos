function findLargest3x3(someArray) {
  let largest = -1;
  for (let row of someArray) {
    for (let value of row) {
      if (value > largest) {
        largest = value;
      }
    }
  }
  return largest;
}