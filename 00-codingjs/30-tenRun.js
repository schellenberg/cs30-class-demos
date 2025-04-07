function tenRun(nums) {
  let lastMultiple = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 10 === 0) {
      lastMultiple = nums[i];
    }
    else if (lastMultiple !== -1) {
      nums[i] = lastMultiple;
    }
  }
  return nums;
}