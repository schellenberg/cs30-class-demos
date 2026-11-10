function fix23(nums) {
  if (nums[0] === 2 && nums[1] === 3) {
    nums[1] = 0;
  }
  if (nums[1] === 2 && nums[2] === 3) {
    nums[2] = 0;
  }
  return nums;
}