function tenRun(nums) {
  let lastTen;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 10 === 0) {
      lastTen = nums[i];
    }
    if (lastTen !== undefined) {
      nums[i] = lastTen;
    }
  }
  return nums;
}