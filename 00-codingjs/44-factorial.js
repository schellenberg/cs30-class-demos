function factorial(n) {
  //base case / exit clause
  if (n === 0) {
    return 1;
  }
  //pattern
  else {
    return n * factorial(n-1);
  }
}