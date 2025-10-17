function makeMiddle(nums) {
  let second = nums.length/2;
  return [nums[second-1], nums[second]];
}