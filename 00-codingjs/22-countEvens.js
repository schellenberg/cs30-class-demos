function countEvens(nums) {
  let numberOfEvens = 0;
  for (let theNum of nums) {
    if (theNum % 2 === 0) {
      numberOfEvens++;
    }
  }
  return numberOfEvens;
}