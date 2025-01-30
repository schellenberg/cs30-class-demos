function sleepIn(weekday, vacation) {
    //kamal's version wrecked by Schellenberg
//     if (vacation === true || weekday === false) {
//         return true;
//     }
//     else {
//         return false;
//     }
    
//     #kamal's version
//     if (vacation || !weekday) {
//         return true;
//     }
//     else {
//         return false;
//     }
    
//     #laeron's solution
    return vacation || !weekday;
}