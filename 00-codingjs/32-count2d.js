function count2d(someArray) {
  //classic loop
//   let counter = 0;
//   for (let y = 0; y < someArray.length; y++) {
//     for (let x = 0; x < someArray[y].length; x++) {
//       counter++;
//     }
//   }
//   return counter;
  
  
  //for of loop 
  let counter = 0;
  for (let row of someArray) {
    for (let col of row) {
      counter++;
    }
  }
  return counter;
}