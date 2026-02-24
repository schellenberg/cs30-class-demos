function squirrelPlay(temp, isSummer) {
//   if (isSummer && temp >= 60 && temp <= 100) {
//     return true;
//   }
//   else if (!isSummer && temp >= 60 && temp <= 90) {
//     return true;
//   }
//   else {
//     return false;
//   }
  
//   if (isSummer && temp >= 60 && temp <= 100 ||
//      !isSummer && temp >= 60 && temp <= 90) {
//     return true;
//   }
//   else {
//     return false;
//   }
  
  return isSummer && temp >= 60 && temp <= 100 ||
         !isSummer && temp >= 60 && temp <= 90;
}