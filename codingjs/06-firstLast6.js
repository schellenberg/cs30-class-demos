function firstLast6(nums) {
  let first = nums[0];
  let last = nums[nums.length - 1];
  return first === 6 || last === 6;
}