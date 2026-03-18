// 2D Grid Demo
//learning 2d arrays

let theGrid = [[1, 0, 1, 0],
               [1, 0, 1, 0],
               [0, 1, 0, 1],
               [0, 0, 1, 1]];
const SQUARE_DIMENSION = theGrid.length;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (width > height) {
    cellSize = height/SQUARE_DIMENSION;
  }
  else {
    cellSize = width/SQUARE_DIMENSION;
  }
}

function draw() {
  background(220);
  showGrid();
}

function showGrid() {
  for (let y = 0; y < SQUARE_DIMENSION; y++) {
    for (let x = 0; x < SQUARE_DIMENSION; x++) {
      if (theGrid[y][x] === 1) {
        fill("black");
      }
      else if (theGrid[y][x] === 0) {
        fill("white");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}
