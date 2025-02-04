function posNeg(a, b, negative) {
  //kamal's solution
  return (negative && a < 0 && b < 0) ||
         (!negative && a < 0 && b > 0) ||
         (!negative && a > 0 && b < 0);
  
  
  //Laeron's solution
//   if (negative) {
//     return a < 0 && b < 0;
//   }
//   return a * b < 0;
  
  //Judah's solution
//   return (negative) ? (Math.sign(a) === -1 && Math.sign(b) === -1) : (Math.sign(a) !== Math.sign(b));
  
  //Luke's solution
//   return (a * b < 0 && !negative || (Math.abs(a)-a) * (Math.abs(b)-b) !== 0 && negative);
  
//   if (negative && a < 0 && b < 0) {
//     return true;
//   }
//   else if (!negative && a < 0 && b > 0) {
//     return true;
//   }
//   else if (!negative && a > 0 && b < 0) {
//     return true;
//   }
//   else {
//     return false;
//   }
}