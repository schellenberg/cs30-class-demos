function sleepIn(weekday, vacation) {
//     #harjot's solution
//      if (weekday === false || vacation === true) {
//          return true;
//      }
//      else {
//          return false;
//      }
    
//     #vivaan's solution
//      if (weekday === true && vacation === false) {
//          return false;
//      }
//      else {
//          return true;
//      }

//     #in between solution
//      return weekday === false || vacation === true;

//     #yet one more
//      return !weekday === true || vacation === true;

//     #zichen's solution
    return vacation || !weekday;
}