function sleepIn(weekday, vacation) {
    //nicest solution
    return vacation || !weekday;
  
  
     //michael's solution
//      if (vacation || !weekday) {
//          return true;
//      }
//      else {
//          return false;
//      }
  
  
     //cherry's solution
//      if (weekday === false) {
//          return true;
//      }
//      else if (vacation === true) {
//          return true;
//      }
//      else {
//          return false;
//      }
}