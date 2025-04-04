function lucky13(nums) {
  for (let theNumber of nums) {
    if (theNumber === 1 || theNumber === 3) {
      return false;
    }
  }
  return true;
}