function makeMiddle(nums) {
  let rightMiddle = nums[nums.length/2];
  let leftMiddle = nums[nums.length/2 - 1];
  return [leftMiddle, rightMiddle];
}