function cigarParty(cigars, isWeekend) {
  //ali's solution
  return (isWeekend && cigars >= 40) ||
         (cigars >= 40 && cigars <= 60);
  
  //dhyan's solution
//   if (isWeekend) {
//     return cigars >= 40;
//   }
//   else {
//     return !(cigars < 40 || cigars > 60);
//   }
}