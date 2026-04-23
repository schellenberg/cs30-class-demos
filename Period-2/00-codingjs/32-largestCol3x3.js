function largestCol3x3(someArray) {
  let counter = 0;
  let largest = 0;
  for (let y = 0; y < someArray.length; y++) {
    counter = 0;
    for (let x = 0; x < someArray[y].length; x++) {
      counter += someArray[x][y];
      if (counter > largest) {
        largest = counter;
      }
    }
  }
  return largest;
}