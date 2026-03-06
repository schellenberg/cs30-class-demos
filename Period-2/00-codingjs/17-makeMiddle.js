function makeMiddle(nums) {
  let rightIndex = nums.length/2;
  return [nums[rightIndex-1], nums[rightIndex]];
}