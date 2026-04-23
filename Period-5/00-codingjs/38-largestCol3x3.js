function largestCol3x3(someArray) {
  let largest = -Infinity;
  for (let x = 0; x < 3; x++) {
    let colSum = 0;
    for (let y = 0; y < 3; y++) {
      colSum += someArray[y][x];
    }
    if (colSum > largest) {
      largest = colSum;
    }
  }
  return largest;
}