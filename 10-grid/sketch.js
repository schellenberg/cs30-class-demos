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
let toggleStyle = "self";

function setup() {
  //make the canvas the largest square that you can...
  if (windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }

  //if randomizing the grid, do this:
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  
  //this is dumb -- should check if this is the right size!
  cellSize = height/grid.length;
}

function windowResized() {
  //make the canvas the largest square that you can...
  if (windowWidth < windowHeight) {
    resizeCanvas(windowWidth, windowWidth);
  }
  else {
    resizeCanvas(windowHeight, windowHeight);
  }

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

  if (key === "n") {
    toggleStyle = "neighbours";
  }

  if (key === "s") {
    toggleStyle = "self";
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  //toggle self
  toggleCell(x, y);

  // and NESW neighbours, if style is set to neighbours
  if (toggleStyle === "neighbours") {
    toggleCell(x + 1, y);
    toggleCell(x - 1, y);
    toggleCell(x, y + 1);
    toggleCell(x, y - 1);
  }
}

function toggleCell(x, y) {
  // make sure the cell you're toggling is in the grid...
  if (x < GRID_SIZE && y < GRID_SIZE &&
      x >= 0 && y >= 0) {
    //toggle the color of the cell
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else {
      grid[y][x] = 0;
    }
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