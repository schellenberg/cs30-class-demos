function cigarParty(cigars, isWeekend) {
  return cigars >= 40 && (cigars <= 60 || isWeekend);
  
//   return (40 <= cigars && 60 >= cigars && !isWeekend) ||
//          (isWeekend && cigars >= 40);
}