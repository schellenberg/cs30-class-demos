function sleepIn(weekday, vacation) {
     //vijeta's solution
//      if (vacation === true) {
//          return true;
//      }
//      else if (weekday === false && vacation === false) {
//          return true;
//      }
//      else {
//          return false;
//      }
  
     //albert's solution
//      if (!weekday || vacation) {
//          return true;
//      }
//      else {
//          return false;
//      }
  
    //amy's solution
    return !weekday || vacation;
}