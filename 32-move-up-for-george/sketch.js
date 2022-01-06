let grid = [[0,0,0],
            [2,0,2],
            [4,0,2]];

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = moveUp(grid);
}

function draw() {
  background(220);
}

function moveUp(grid) {
  for (let y=1; y<3; y++) {
    for (let x=0; x<3; x++) {
      if (grid[y][x] !== 0) {
        let thisY = y;
        let thisX = x;
        while (grid[thisY-1][thisX] === 0) {
          grid[thisY-1][thisX] = grid[thisY][thisX];
          grid[thisY][thisX] = 0;
          
          thisY -= 1;
          if (thisY <= 1) {
            break;
          }
        }
      }
    }
  }
  return grid;
}