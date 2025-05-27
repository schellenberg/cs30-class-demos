function bunnyEars2(bunnies) {
  //base case
  if (bunnies === 0) {
    return 0;
  }
  //pattern
  else if (bunnies % 2 === 1) {
    //odd number
    return 2 + bunnyEars2(bunnies-1);
  }
  else {
    //even number
    return 3 + bunnyEars2(bunnies-1);
  }
}