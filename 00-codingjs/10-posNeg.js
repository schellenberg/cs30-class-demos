function posNeg(a, b, negative) {
  
  return (a < 0 && b < 0 && negative) ||
         (a * b < 0 && !negative);
  
//   if (negative) {
//     return a < 0 && b < 0;
//   }
//   else {
//     return a * b < 0 || a * b < 0;
//   }
  
//   if (negative) {
//     return a < 0 && b < 0;
//   }
//   else {
//     return a < 0 && b > 0 || a > 0 && b < 0;
//   }
}