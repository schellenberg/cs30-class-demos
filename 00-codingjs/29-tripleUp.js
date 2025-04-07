function tripleUp(nums) {
  if (nums.length < 3) {
    return false;
  }
  for (let i = 0; i < nums.length - 2; i++) {
    let initial = nums[i];
    if (nums[i+1] === initial + 1 && 
        nums[i+2] === initial + 2)  {
      return true;
    } 
  }
  return false;
}