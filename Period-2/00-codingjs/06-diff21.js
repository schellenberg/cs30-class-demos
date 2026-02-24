function diff21(n) {
  //adbullah's solution
  if (n <= 21) {
    return 21 - n;
  }
  else {
    return (n - 21) * 2;
  }
  
  //bat's solution
//   return n < 21 && 21 - n || n >= 21 && (n-21)*2;
}