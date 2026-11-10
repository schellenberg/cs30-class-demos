function has12(nums) {
  let oneSeen = false;
  for (let num of nums) {
    if (num === 1) {
      oneSeen = true;
    }
    if (num === 2 && oneSeen) {
      return true;
    }
  }
  return false;
}