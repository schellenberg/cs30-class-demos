function lucky13(nums) {
  for (let num of nums) {
    if (num === 1 || num === 3) {
      return false;
    }
  }
  return true;
}