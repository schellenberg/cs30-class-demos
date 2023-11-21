function neighborNESW2(someArray) {
  let neighbors = 0;
  for (let y = 0; y < someArray.length; y++) {
    for (let x = 0; x < someArray[y].length; x++) {
      let anyNeighbors = false;
      
      //north
      if (y-1 >= 0 && someArray[y-1][x] === 1) {
        anyNeighbors = true;
      }
      //south
      if (y+1 < someArray.length && someArray[y+1][x] === 1) {
        anyNeighbors = true;
      }
      //west
      if (x-1 >= 0 && someArray[y][x-1] === 1) {
        anyNeighbors = true;
      }
      //east
      if (x+1 < someArray[y].length && someArray[y][x+1] === 1) {
        anyNeighbors = true;
      }
      
      if (anyNeighbors) {
        neighbors++;
      }
    }
  }
  return neighbors;
}