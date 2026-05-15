function factorial(n) {
  if (n === 0) {
    //exit clause
    return 1;
  }
  else {
    //pattern
    return n * factorial(n-1);
  }
}