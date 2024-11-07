function lastSum(someArray) {
  let counter = 0;
  for (let row of someArray) {
    counter += row[row.length-1];
  }
  return counter;
}