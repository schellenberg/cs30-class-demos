function sleepIn(weekday, vacation) {
//       # lacon's solution
//      if (weekday === false) {
//          return true;
//      }
//      else if (vacation === true && weekday === true) {
//          return true;
//      }
//      else {
//          return false;
//      }

//     #afrukhta's solution
//      if (weekday === false || vacation === true) {
//          return true;
//      }
//      else {
//          return false;
//      }

//     #explanation
//      return weekday === false || vacation === true;

//     # dracen's solution
     return !weekday || vacation;
}