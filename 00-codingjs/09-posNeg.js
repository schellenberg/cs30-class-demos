function posNeg(a, b, negative) {
//   if (negative && a < 0 && b < 0) {
//     return true;
//   }
//   if (!negative && a < 0 && b > 0) {
//     return true;
//   }
//   if (!negative && b < 0 && a > 0) {
//     return true;
//   }
//   else {
//     return false;
//   }
  
//   if ((negative && a < 0 && b < 0)  ||
//       (!negative && a < 0 && b > 0) ||
//       (!negative && b < 0 && a > 0)) {
//     return true;
//   }
//   else {
//     return false;
//   }
  
  return negative && a < 0 && b < 0  ||
         !negative && a < 0 && b > 0 ||
         !negative && b < 0 && a > 0;
}