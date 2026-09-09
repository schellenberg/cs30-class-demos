function squirrelPlay(temp, isSummer) {
  return (isSummer && temp >= 60 && temp <= 100) ||
         (!isSummer && temp >= 60 && temp <= 90);
  
//   let upper = 90;
//   if (isSummer) {
//     upper = 100;
//   }
//   return temp >= 60 && temp <= upper;
}