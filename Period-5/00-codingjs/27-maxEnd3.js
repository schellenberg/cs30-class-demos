function maxEnd3(nums) {
//   if (nums[0] > nums[2]) {
//     nums[1] = nums[0];
//     nums[2] = nums[0];
//   }
//   else {
//     nums[0] = nums[2];
//     nums[1] = nums[2];
//   }
//   return nums;
  
  let larger = Math.max(nums[0], nums[2]);
  for (let i = 0; i < nums.length; i++) {
    nums[i] = larger;
  }
  return nums;
}