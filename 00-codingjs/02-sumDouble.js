function sumDouble(a, b) {
    //khoi's solution
//     let sum;
//     if (a === b) {
//         sum = a * 2 + b * 2;
//     }
//     else {
//         sum = a + b;
//     }
//     return sum;
    
//     #luke's solution
//     if (a === b) {
//         return 2 * (a + b);
//     }
//     else {
//         return a + b;
//     }
    
//     #judah's solution
    if (a !== b) {
        return a + b;
    }
    return 2 * (a + b);
}