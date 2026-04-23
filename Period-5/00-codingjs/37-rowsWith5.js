function rowsWith5(someArray) {
  let counter = 0;
  for (let row of someArray) {
    let fiveSeen = false;
    for (let value of row) {
      if (value === 5) {
        fiveSeen = true;
      }
    }
    if (fiveSeen) {
      counter++;
    }
  }
  return counter;
}