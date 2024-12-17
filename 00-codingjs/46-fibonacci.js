function fibonacci(n) {
  //base case(s)
  if (n === 0 || n === 1) {
    return n;
  }
  //pattern
  else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}