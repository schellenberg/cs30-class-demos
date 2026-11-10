function neighborNESW(someArray) {
  let neighbours = 0;
  for (let y = 0; y < someArray.length; y++) {
    for (let x = 0; x < someArray[y].length; x++) {
      if (y-1 >= 0 && someArray[y-1][x] === 1) {
        neighbours++;
      }
      if (y+1 < someArray.length && someArray[y+1][x] === 1) {
        neighbours++;
      }
      if (x-1 >= 0 && someArray[y][x-1] === 1) {
        neighbours++;
      }
      if (x+1 < someArray[y].length && someArray[y][x+1] === 1) {
        neighbours++;
      }
    }
  }
  return neighbours;
}