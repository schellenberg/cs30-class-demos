function parrotTrouble(talking, hour) {
  //artin-ish solution
//   if ((hour < 7 || hour > 20) && talking) {
//     return true;
//   }
//   else {
//     return false;
//   }
  
  return (hour < 7 || hour > 20) && talking;
}