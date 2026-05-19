function fibonacci(n) {
  //exit clause(s)
  if (n === 0) {
    return 0;
  }
  else if (n === 1) {
    return 1;
  }
  //pattern
  else {
    return fibonacci(n-2) + fibonacci(n-1);
  }
}