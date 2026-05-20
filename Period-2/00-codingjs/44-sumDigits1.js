function sumDigits1(n) {
  //base case
  if (n < 10) {
    return n;
  }
  //pattern
  else {
    let rightDigit = n % 10;
    let remaining = Math.floor(n/10);
    return rightDigit + sumDigits1(remaining);
  }
}