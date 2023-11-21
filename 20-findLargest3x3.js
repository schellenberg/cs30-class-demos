function findLargest3x3(someArray) {
  let biggest = 0;
  for (let row of someArray) {
    for (let col of row) {
      if (col > biggest) {
        biggest = col;
      }
    }
  }
  return biggest;
}