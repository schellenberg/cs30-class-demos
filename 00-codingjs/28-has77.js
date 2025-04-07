function has77(nums) {
  //if one element or less, can't be true
  if (nums.length < 2) {
    return false;
  }
  //if there's exactly two elements, only check one scenario
  else if (nums.length === 2) {
    return nums[0] === 7 && nums[1] === 7;
  }
  //at least 3 elements
  else {
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === 7 && nums[i+1] === 7 ||
          nums[i] === 7 && nums[i+2] === 7) {
        return true;
      }
    }
    return false;
  }
}