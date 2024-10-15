function makeLast(nums) {
  let newLength = nums.length * 2;
  let newNums = [];
  for (let i = 0; i < newLength; i++) {
    newNums.push(0);
  }
  newNums[newNums.length-1] = nums[nums.length-1];
  return newNums;
}