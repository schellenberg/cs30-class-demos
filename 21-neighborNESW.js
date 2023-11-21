function neighborNESW(someArray) {
  let neighbors = 0;
  for (let y = 0; y < someArray.length; y++) {
    for (let x = 0; x < someArray[y].length; x++) {
      //north
      if (y-1 >= 0) {
        neighbors += someArray[y-1][x];
      }
      //south
      if (y+1 < someArray.length) {
        neighbors += someArray[y+1][x];
      }
      //west
      if (x-1 >= 0) {
        neighbors += someArray[y][x-1];
      }
      //east
      if (x+1 < someArray[y].length) {
        neighbors += someArray[y][x+1];
      }
    }
  }
  return neighbors;
}