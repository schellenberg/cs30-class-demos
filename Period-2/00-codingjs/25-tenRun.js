function tenRun(nums) {
  let seenTen = false;
  let lastTen;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 10 === 0) {
      lastTen = nums[i];
      seenTen = true;
    }
    if (seenTen) {
      nums[i] = lastTen;
    }
  }
  return nums;
  
//   let lastTen = 1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 10 === 0) {
//       lastTen = nums[i];
//     }
//     else if (lastTen % 10 === 0) {
//       nums[i] = lastTen;
//     }
//   }
//   return nums;
}