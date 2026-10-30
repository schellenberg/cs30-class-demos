function count5in2x2(someArray) {
//   //conventional looping method
//   let fives = 0;
//   for (let y = 0; y < 2; y++) {
//     for (let x = 0; x < 2; x++) {
//       if (someArray[y][x] === 5) {
//         fives++;
//       }
//     }
//   }
//   return fives;
  
  
  //using for of loops
  let fives = 0;
  for (let row of someArray) {
    for (let col of row) {
      if (col === 5) {
        fives++;
      }
    }
  }
  return fives;
}