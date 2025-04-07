function withoutTen(nums) {
  let newNums = [];
  let tenCounter = 0;
  for (let number of nums) {
    if (number === 10) {
      tenCounter++;
    }
    else {
      newNums.push(number);
    }
  }
  //add the zeros where there were 10's
  for (let i = 0; i < tenCounter; i++) {
    newNums.push(0);
  }
  return newNums;
}