function midThree(nums) {
  let middleSpot = Math.floor(nums.length/2);
  return [nums[middleSpot-1], nums[middleSpot], nums[middleSpot+1]];
}