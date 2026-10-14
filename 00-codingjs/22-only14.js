function only14(nums) {
  for (let num of nums) {
    if (num !== 1 && num !== 4) {
      return false;
    }
  }
  return true;
}