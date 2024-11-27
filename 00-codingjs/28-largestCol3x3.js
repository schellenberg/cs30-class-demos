function largestCol3x3(someArray) {
  let largest = 0;
  for (let x = 0; x < 3; x++) {
    let thisRowSum = 0;
    for (let y = 0; y < 3; y++) {
      thisRowSum += someArray[y][x];
    }
    if (thisRowSum > largest) {
      largest = thisRowSum;
    }
  }
  return largest;
}