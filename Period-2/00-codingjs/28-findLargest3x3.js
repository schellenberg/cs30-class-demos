function findLargest3x3(someArray) {
  let largest = -1;
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      if (someArray[y][x] > largest) {
        largest = someArray[y][x];
      }
    }
  }
  return largest;
}