function withoutTen(nums) {
  for (let i = nums.length-1; i >= 0; i--) {
    if (nums[i] === 10) {
      nums.splice(i, 1);
      nums.push(0);
    }
  }
  return nums;
}