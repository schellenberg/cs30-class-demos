function countEvens(nums){
  let howManyEvens = 0;
  for (let thisNumber of nums) {
    if (thisNumber % 2 === 0) {
      howManyEvens++;
    }
  }
  return howManyEvens;
}