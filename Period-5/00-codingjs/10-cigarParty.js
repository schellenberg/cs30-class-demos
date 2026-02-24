function cigarParty(cigars, isWeekend) {
//   if (isWeekend && cigars >= 40) {
//     return true;
//   }
//   else if (!isWeekend && cigars >= 40 && cigars <= 60) {
//     return true;
//   }
//   else {
//     return false;
//   }
  
//   if (isWeekend && cigars >= 40 ||
//       !isWeekend && cigars >= 40 && cigars <= 60) {
//     return true;
//   }
//   else {
//     return false;
//   }
  
  return isWeekend && cigars >= 40 ||
         !isWeekend && cigars >= 40 && cigars <= 60;
}