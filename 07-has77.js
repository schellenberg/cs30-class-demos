function has77(nums){
  for (let i=0; i<nums.length-1; i++) {
    if (nums[i] === 7 && nums[i+1] === 7 ||
        nums[i] === 7 && nums[i+2] === 7) {
      return true;
    }
  }
  return false;
}