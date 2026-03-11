function only14(nums) {
  for (let num of nums) {
    if (num !== 4 && num !== 1) {
      return false;
    }
  }
  return true;
}