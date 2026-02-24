function loneTeen(a, b) {
//   if (a >= 13 && a <= 19 && b >= 13 && b <= 19) {
//     return false;
//   }
//   else if (a >= 13 && a <= 19 || b >= 13 && b <= 19) {
//     return true;
//   }
//   else {
//     return false;
//   }
  
  return (a >= 13 && a <= 19) && (b < 13 || b > 19) ||
         (b >= 13 && b <= 19) && (a < 13 || a > 19);
}