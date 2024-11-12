function neighborNESW(someArray) {
  let neighbours = 0;
  for (let y = 0; y < someArray.length; y++) {
    for (let x = 0; x < someArray[y].length; x++) {
      if (y - 1 >= 0) {
        neighbours += someArray[y-1][x]; //N
      }
      if (y + 1 < someArray.length) {
        neighbours += someArray[y+1][x]; //S
      }
      if (x + 1 < someArray[y].length) {
        neighbours += someArray[y][x+1]; //E
      }
      if (x - 1 >= 0) {
        neighbours += someArray[y][x-1]; //W
      }
    }
  }
  return neighbours;
}