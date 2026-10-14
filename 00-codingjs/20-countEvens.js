function countEvens(nums) {
  let evens = 0;
  for (let num of nums) {
    if (num % 2 === 0) {
      evens++;
    }
  }
  return evens;
}