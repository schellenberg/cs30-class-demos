function tripleUp(nums) {
  for (let i = 0; i < nums.length; i++) {
    let value = nums[i];
    if (nums[i+1] === value + 1 && nums[i+2] === value + 2) {
      return true;
    }
  }
  
  return false;
}