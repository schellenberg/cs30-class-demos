function maxEnd3(nums){
  let bigNumber;
  if (nums[0] > nums[nums.length-1]) {
    bigNumber = nums[0];
  }
  else {
    bigNumber = nums[nums.length-1];
  }
  
  for (let i = 0; i < nums.length; i++) {
    nums[i] = bigNumber;
  }
  return nums;
}