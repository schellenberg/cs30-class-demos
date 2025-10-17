function midThree(nums) {
  let middleLoc = Math.floor(nums.length/2);
  return [nums[middleLoc-1], nums[middleLoc], nums[middleLoc+1]];
}