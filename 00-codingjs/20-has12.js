function has12(nums) {
  let hasSeenOne = false;
  for (let number of nums) {
    if (number === 1) {
      hasSeenOne = true;
    }
    if (number === 2 && hasSeenOne) {
      return true;
    }
  }
  return false;
}