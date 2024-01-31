function sleepIn(weekday, vacation) {
//   #Hanson's solution
     return vacation || !weekday;
    
//     #Bennett's solution
//      if (vacation || !weekday) {
//          return true;
//      }
//      else {
//          return false;
//      }
    
//     #Muhammad's solution
//      if (weekday === true && vacation === false) {
//          return false;
//      }
//      else{
//          return true;
//      }
        
    
// #Aaraiz's solution
//    if (vacation === true) {
//        return true;
//    }
//    if (vacation !== true && weekday === true) {
//        return false;
//    }
//    if (vacation !== true && weekday !== true) {
//        return true;
//    }
}