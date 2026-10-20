function tenRun(nums) {
  let lastMultiple;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 10 === 0) {
      lastMultiple = nums[i];
    }
    else if (lastMultiple !== undefined) {
      nums[i] = lastMultiple;
    }
  }
  return nums;
}