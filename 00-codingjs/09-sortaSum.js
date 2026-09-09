function sortaSum(a, b) {
  let theSum = a + b;
  if (theSum >= 10 && theSum <= 19) {
    return 20;
  }
  else {
    return theSum;
  }
}