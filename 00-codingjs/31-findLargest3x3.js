function findLargest3x3(someArray) {
  //old style loop
//   let largest = 0;
//   for (let y = 0; y < 3; y++) {
//     for (let x = 0; x < 3; x++) {
//       if (someArray[y][x] > largest) { 
//         largest = someArray[y][x];
//       }
//     }
//   }
//   return largest;
  
  
//   for of loop method
  let largest = 0;
  for (let row of someArray) {
    for (let col of row) {
      if (col > largest) {
        largest = col;
      }
    }
  }
  return largest;
}