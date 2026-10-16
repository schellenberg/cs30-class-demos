function makeLast(nums) {
  let newNums = [];
  for (let i = 0; i < nums.length * 2; i++) {
    newNums.push(0);
  }
  newNums[newNums.length-1] = nums[nums.length-1];
  return newNums;
}