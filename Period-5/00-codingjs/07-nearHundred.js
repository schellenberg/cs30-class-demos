function nearHundred(n) {
//   if (n >= 90 && n <= 110 || n >= 190 && n <= 210) {
//     return true;
//   }
//   else {
//     return false;
//   }
  
//   return n >= 90 && n <= 110 || n >= 190 && n <= 210;
  
  return Math.abs(100 - n) <= 10 || Math.abs(200-n) <= 10;
}