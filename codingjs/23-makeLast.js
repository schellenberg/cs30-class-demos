function makeLast(nums) {
  let newArray = [];
  for (let i = 0; i < nums.length * 2; i++) {
    newArray.push(0);
  }
  newArray[newArray.length-1] = nums[nums.length-1];
  return newArray;
}