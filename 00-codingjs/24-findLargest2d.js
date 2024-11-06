function findLargest2d(someArray) {
  let largest = -1;
  for (let row of someArray) {
    for (let number of row) {
      if (number > largest) {
        largest = number;
      }
    }
  }
  return largest;
}