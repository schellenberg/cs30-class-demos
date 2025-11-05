function has12(nums) {
  let seenOne = false;
  for (let theNum of nums) {
    if (theNum === 1) {
      seenOne = true;
    }
    if (theNum === 2 && seenOne) {
      return true;
    }
  }
  return false;
}