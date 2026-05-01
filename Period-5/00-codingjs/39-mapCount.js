function mapCount(someMap) {
//   let counter = 0;
//   if (someMap.has("a")) {
//     counter++;
//   }
//   if (someMap.has("b")) {
//     counter++;
//   }
//   if (someMap.has("c")) {
//     counter++;
//   }
//   return counter;
  
  
  let counter = 0;
  for (let theKey of ["a", "b", "c"]) {
    if (someMap.has(theKey)) {
      counter++;
    }
  }
  
  return counter;
  
}