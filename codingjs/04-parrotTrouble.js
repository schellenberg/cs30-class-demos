function parrotTrouble(talking, hour) {
  //jawad
//   if (talking === true && (hour < 7 || hour > 20)) {
//     return true;
//   }
//   else {
//     return false;
//   }
  
  //alternative jawad
//   return talking === true && (hour < 7 || hour > 20);
  
  //rauphel
  return talking && (hour < 7 || hour > 20);
}