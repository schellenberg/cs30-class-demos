function bunnyEars(bunnies) {
  //exit clause
  if (bunnies === 0) {
    return 0;
  }
  //pattern
  else {
    return 2 + bunnyEars(bunnies-1);
  }
}