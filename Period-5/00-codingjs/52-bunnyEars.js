function bunnyEars(bunnies) {
  if (bunnies === 0) {
    //base case
    return 0;
  }
  else {
    //pattern
    return 2 + bunnyEars(bunnies-1);
  }
}