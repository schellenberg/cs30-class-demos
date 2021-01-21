function has22(nums){
  for (let i=0; i<nums.length-1; i++) {
    if (nums[i] === 2 && nums[i+1] === 2) {
      return true;
    }
  }
  return false;
}