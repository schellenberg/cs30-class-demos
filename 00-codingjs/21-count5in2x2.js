function count5in2x2(someArray) {
  let counter = 0;
  for (let row of someArray) {
    for (let num of row) {
      if (num === 5) {
        counter++;
      }
    }
  }
  return counter;
  
  
//   let counter = 0;
//   for (let y = 0; y < 2; y++) {
//     for (let x = 0; x < 2; x++) {
//       if (someArray[y][x] === 5) {
//         counter++;
//       }
//     }
//   }
//   return counter;
}