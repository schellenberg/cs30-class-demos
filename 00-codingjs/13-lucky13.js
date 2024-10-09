function lucky13(nums) {
  for (let theNum of nums) {
    if (theNum === 1 || theNum === 3) {
      return false;
    }
  }
  return true;
}