function only14(nums) {
  for (let theNum of nums) {
    if (theNum !== 1 && theNum !== 4) {
      return false;
    }
  }
  return true;
}