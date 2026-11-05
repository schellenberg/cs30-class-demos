function lastSum(someArray) {
  let theSum = 0;
  for (let row of someArray) {
    theSum += row[row.length-1];
  }
  return theSum;
}