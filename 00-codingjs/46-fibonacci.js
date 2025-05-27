function fibonacci(n) {
  //base case(s)
  if (n === 0) {
    return 0;
  }
  else if (n === 1) {
    return 1;
  }
  
  //pattern
  else {
    return fibonacci(n-1) + fibonacci(n-2);
  }
}