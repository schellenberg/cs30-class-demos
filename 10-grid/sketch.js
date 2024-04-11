// 2D Grid
// Dan Schellenberg
// Apr 9, 2024

// if you are hard-coding a level, I'd use something like this

// let grid = [[1, 0, 0, 1],
//             [0, 1, 0, 1],
//             [1, 1, 0, 0],
//             [1, 0, 1, 1],
//             [0, 0, 0, 1],
//             [0, 0, 1, 1],
//             [0, 1, 0, 1],
//             [0, 0, 0, 1]];

let grid;
let cellSize;
const GRID_SIZE = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //if randomizing the grid, do this:
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  
  //this is dumb -- should check if this is the right size!
  cellSize = height/grid.length;
}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }

  if (key === "e") {
    grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  // console.log(x, y);

  //fix this so we check if we fell off the top or left sides...

  //don't fall off the edge of the grid...
  if (x < GRID_SIZE && y < GRID_SIZE) {
    toggleCell(x, y);
  }

  // is moving one cell to right still on the grid?
  if (x + 1 < GRID_SIZE && y < GRID_SIZE) {
    toggleCell(x + 1, y);
  }

  // is moving one cell to left still on the grid?
  if (x - 1 < GRID_SIZE && y < GRID_SIZE) {
    toggleCell(x - 1, y);
  }

  // is moving one cell to up still on the grid?
  if (x < GRID_SIZE && y + 1 < GRID_SIZE) {
    toggleCell(x, y + 1);
  }

  // is moving one cell to down still on the grid?
  if (x < GRID_SIZE && y - 1 < GRID_SIZE) {
    toggleCell(x, y - 1);
  }
}

function toggleCell(x, y) {
  //toggle the color of the cell
  if (grid[y][x] === 0) {
    grid[y][x] = 1;
  }
  else {
    grid[y][x] = 0;
  }
}

function displayGrid() {
  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 1) {
        fill("black");
      }
      else {
        fill("white");
      }
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}

function generateRandomGrid(cols, rows) {
  let emptyArray = [];
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {
      //half the time, be a 1. Other half, be a 0.
      if (random(100) < 50) {
        emptyArray[y].push(0);
      }
      else {
        emptyArray[y].push(1);
      }
    }
  }
  return emptyArray;
}

function generateEmptyGrid(cols, rows) {
  let emptyArray = [];
  for (let y = 0; y < rows; y++) {
    emptyArray.push([]);
    for (let x = 0; x < cols; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}