function in1To10(n, outsideMode) {
//   if (!outsideMode && n >= 1 && n <= 10) {
//     return true;
//   }
//   else if (outsideMode && (n <= 1 || n >= 10)) {
//     return true;
//   }
//   else {
//     return false;
//   }
  
//   if ((!outsideMode && n >= 1 && n <= 10) ||
//       (outsideMode && (n <= 1 || n >= 10))) {
//     return true;
//   }
//   else {
//     return false;
//   }
  
  return (!outsideMode && n >= 1 && n <= 10) ||
         (outsideMode && (n <= 1 || n >= 10));
}