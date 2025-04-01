function has22(nums) {
  if (nums.length >= 2) {
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === 2 && nums[i-1] === 2) {
        return true;
      }
    }
    return false;
  }
  else {
    return false;
  }
}