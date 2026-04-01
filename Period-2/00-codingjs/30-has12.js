function has12(nums) {
  let seenOne = false;
  for (let num of nums) {
    if (num === 1) {
      seenOne = true;
    }
    if (num === 2 && seenOne) {
      return true;
    }
  }
  return false;
}