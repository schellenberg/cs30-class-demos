function countEvens(nums){
  let howManyEvens = 0;
  for (let i=0; i<nums.length; i++) {
    if (nums[i] % 2 === 0) {
      howManyEvens++;
    }
  }
  return howManyEvens;
}