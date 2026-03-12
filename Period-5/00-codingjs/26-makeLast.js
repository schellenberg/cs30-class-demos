function makeLast(nums) {
  let newArray = [];
  for (let num of nums) {
    newArray.push(0);
    newArray.push(0);
  }
  newArray[newArray.length-1] = nums[nums.length-1];
  return newArray;
}