function countEvens(nums) {
  let evens = 0;
  for (let theNum of nums) {
    if (theNum % 2 === 0) {
      evens++;
    }
  }
  return evens;
}