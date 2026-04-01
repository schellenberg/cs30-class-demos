function has12(nums) {
  let hasSeenOne = false;
  for (let num of nums) {
    if (num === 1) {
      hasSeenOne = true;
    }
    if (num === 2 && hasSeenOne) {
      return true;
    }
  }
  return false;
}