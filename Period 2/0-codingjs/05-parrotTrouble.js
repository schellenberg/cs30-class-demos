function parrotTrouble(talking, hour) {
  //mehreeb's solution
//   if (talking === true && (hour < 7 || hour > 20)) {
//     return true;
//   }
//   else {
//     return false;
//   }
  
  //adapted
//   return talking === true && (hour < 7 || hour > 20);
  
  //tyler's solution
  return (hour < 7 || hour > 20) && talking;
}