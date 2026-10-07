function makeMiddle(nums) {
  let leftSpot = nums.length/2 - 1;
  return [nums[leftSpot], nums[leftSpot+1]];
}