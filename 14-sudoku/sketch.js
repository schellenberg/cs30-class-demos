// 2D Array Demo -- Drawing a Grid
// Schellenberg
// March 20, 2023

let grid = [[0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 3, 0, 8, 5],
            [0, 0, 1, 0, 2, 0, 0, 0, 0],
            [0, 0, 0, 5, 0, 7, 0, 0, 0],
            [0, 0, 4, 0, 0, 0, 1, 0, 0],
            [0, 9, 0, 0, 0, 0, 0, 0, 0],
            [5, 0, 0, 0, 0, 0, 0, 7, 3],
            [0, 0, 2, 0, 1, 0, 0, 0, 0],
            [0, 0, 0, 0, 4, 0, 0, 0, 9]];

const ROWS = 9;
const COLS = 9;
let cellSize;

function setup() {
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }

  cellSize = width/ROWS;
}

function draw() {
  background(220);
  displayGrid();
  drawBoxes();
}

function drawBoxes() {
  //vertical lines
  strokeWeight(5);
  line(3*cellSize, 0, 3*cellSize, height);
  line(6*cellSize, 0, 6*cellSize, height);

  //horizontal lines
  line(0, 3*cellSize, width, 3*cellSize);
  line(0, 6*cellSize, width, 6*cellSize);
}

function displayGrid() {
  strokeWeight(1);
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      fill("white");
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
      if (grid[y][x] !== 0) {
        fill("black");
        textAlign(CENTER, CENTER);
        textSize(32);
        text(grid[y][x], x * cellSize + cellSize/2, y * cellSize + cellSize/2);
      }
    }
  }
}
