function dateFashion(you, date) {
//   return (you <= 2 || date <= 2) ? 0 : ((you >= 8 || date >= 8) ? 2 : 1);
  
  if (you <= 2 || date <= 2) {
    return 0;
  }
  else if (you >= 8 || date >= 8) {
    return 2;
  }
  else {
    return 1;
  }
  
//   if (you <= 2 || date <= 2) {
//     return 0;
//   }
//   return (you >= 8 || date >= 8) ? 2 : 1;
}