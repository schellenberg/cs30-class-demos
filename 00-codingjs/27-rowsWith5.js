function rowsWith5(someArray) {
  let counter = 0;
  for (let row of someArray) {
    let hasSeenFive = false;
    for (let value of row) {
      if (value === 5) {
        hasSeenFive = true;
      }
    }
    if (hasSeenFive) {
      counter++;
    }
  }
  return counter;
}