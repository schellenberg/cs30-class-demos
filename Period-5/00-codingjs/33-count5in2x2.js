function count5in2x2(someArray) {
//   let fives = 0;
//   for (let y = 0; y < 2; y++) {
//     for (let x = 0; x < 2; x++) {
//       if (someArray[y][x] === 5) {
//         fives++;
//       }
//     }
//   }
//   return fives;
  
  
  let fives = 0;
  for (let rows of someArray) {
    for (let col of rows) {
      if (col === 5) {
        fives++;
      }
    }
  }
  return fives;
}