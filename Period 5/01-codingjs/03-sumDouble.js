function sumDouble(a, b) {
    //artin's solution
//      let theSum;
//      if (a === b) {
//          theSum = a + b;
//          theSum = theSum * 2;
//      }
//      else {
//          theSum = a + b;
//      }
//      return theSum;
    
//     #stephen's solution
// #     c = a + b
// #     if a == b:
// #         c = c * 2
// #     return c

//     #zichen's solution
// #     if a == b:
// #         return 2 * (a + b)
// #     else:
// #         return a + b

//     #albert's solution
    if (a === b) {
        return a * 4;
    }
    return a + b;
}