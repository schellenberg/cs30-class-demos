function factorial(n) {
  //base case(s)
  if (n === 0) {
    return 1;
  }
  //pattern
  else {
    return n * factorial(n-1);
  }
}