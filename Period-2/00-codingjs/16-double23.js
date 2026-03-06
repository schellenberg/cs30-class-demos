function double23(nums) {
  return nums.length === 2 && 
         nums[0] === nums[1] && 
         (nums[0] === 2 || nums[0] === 3);
}