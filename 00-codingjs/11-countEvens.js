function countEvens(nums) {
  let evenCounter = 0;
  for (let theNum of nums) {
    if (theNum % 2 === 0 ) {
      evenCounter++;
    }
  }
  return evenCounter;
}