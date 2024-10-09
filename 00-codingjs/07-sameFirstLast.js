function sameFirstLast(nums) {
  if (nums.length < 1) {
    return false;
  }
  
  let first = nums[0];
  let last = nums[nums.length - 1];
  return first === last;
}