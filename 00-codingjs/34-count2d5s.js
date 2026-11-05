function count2d5s(someArray) {
  //for of loop
  let fives = 0;
  for (let row of someArray) {
    for (let col of row) {
      if (col === 5) {
        fives++;
      }
    }
  }
  return fives;
}