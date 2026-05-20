function bunnyEars2(bunnies) {
  //base case
  if (bunnies === 0) {
    return 0;
  }
  //pattern
  else if (bunnies % 2 === 0) {
    //even bunny
    return 3 + bunnyEars2(bunnies-1);
  }
  else if (bunnies % 2 === 1) {
    //odd bunny
    return 2 + bunnyEars2(bunnies-1);
  }
}