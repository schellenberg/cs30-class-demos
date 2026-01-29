function sumDouble(a, b) {
  //emmett's solution
//     if (a !== b) {
//         return a + b;
//     }
//     else {
//         return 2 * (a + b);
//     }
    
//     #pak's solution
     let theSum = 0;
     if (a === b) {
         theSum = 4 * a;
     }
     else {
         theSum = a + b;
     }
     return theSum;
}