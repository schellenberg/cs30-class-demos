function parrotTrouble(talking, hour) {
  //longer version
//   if (talking === true) {
//     if (hour < 7 || hour > 20) {
//       return true;
//     }
//     else {
//       return false;
//     }
//   }
//   else {
//     return false;
//   }
  
  //shorter version
//   if (talking && (hour < 7 || hour > 20)) {
//     return true;
//   }
//   else {
//     return false;
//   }
  
  //best version
  return talking && (hour < 7 || hour > 20);
}