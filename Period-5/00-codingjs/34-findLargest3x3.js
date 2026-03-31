function findLargest3x3(someArray) {
  let largest = -1;
  for (let y = 0; y < someArray.length; y++) {
    for (let x = 0; x < someArray[y].length; x++) {
      if (someArray[y][x] > largest) {
        largest = someArray[y][x];
      }
    }
  }
  return largest;
}