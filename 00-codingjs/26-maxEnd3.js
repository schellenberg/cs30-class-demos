function maxEnd3(nums) {
  let largest;
  if (nums[0] > nums[2]) {
    largest = nums[0];
  }
  else {
    largest = nums[2];
  }
  for (let i = 0; i < nums.length; i++) {
    nums[i] = largest;
  }
  return nums;
}