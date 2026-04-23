function rowsWith5(someArray) {
  let rowCounter = 0;
  for (let rows of someArray) {
    let fiveSeen = false;
    for (let value of rows) {
      if (value === 5) {
        fiveSeen = true;
      }
    }
    if (fiveSeen) {
      rowCounter++;
    }
  }
  return rowCounter;
}