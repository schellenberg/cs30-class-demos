function diff21(n) {
  //ashad's solution
//   if (n <= 21) {
//     return 21 - n;
//   }
//   else {
//     return 2 * (n-21);
//   }
  
  //amrita's solution
  if (n > 21) {
    return Math.abs(n-21) * 2;
  }
  else {
    return Math.abs(n-21);
  }
}