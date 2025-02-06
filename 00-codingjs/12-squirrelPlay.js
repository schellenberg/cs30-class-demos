function squirrelPlay(temp, isSummer) {
  return temp >= 60 && (isSummer && temp <= 100 || temp <= 90); 
  
  
//   return (isSummer && temp >= 60 && temp <= 100) ||
//          (!isSummer && temp >= 60 && temp <= 90);
  
  
//   return temp >= 60 && (isSummer && temp <= 100 || !isSummer && temp <= 90);
  
  
//   if (isSummer && temp >= 60 && temp <= 100) {
//     return true;
//   }
//   else if (!isSummer && temp >= 60 && temp <= 90) {
//     return true;
//   }
//   else {
//     return false;
//   }
}