function tripleUp(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i+1] === nums[i] + 1 &&
        nums[i+2] === nums[i] + 2) {
      return true;
    }
  }
  return false;
}