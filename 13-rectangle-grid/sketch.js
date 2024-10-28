// Rectangle Grid
// 2D Array Demo

const CELL_SIZE = 20;
let grid;
let rows;
let cols;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width/CELL_SIZE);
  rows = Math.floor(height/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);
}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 1) {
        fill("black");
      }
      else if (grid[y][x] === 0) {
        fill("white");
      }
      square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
    }
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      //toss in a 0 or 1 randomly
      if (random(100) < 50) {
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}