// WASD in Grid Demo

let grid;
let rows = 30;
let cols = 30;
let playerX = 15;
let playerY = 15;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createEmptyGrid(cols, rows);
  grid[playerY][playerX] = 1;
}

function draw() {
  background(220);
  displayGrid(grid, rows, cols);
}

function windowResized() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
}

function keyTyped() {
  // remove player from current spot
  grid[playerY][playerX] = 0;

  // move the player
  if (key === "w" && playerY > 0) {
    playerY -= 1;
  }
  if (key === "s" && playerY < rows - 1) {
    playerY += 1;
  }
  if (key === "d" && playerX < cols - 1) {
    playerX += 1;
  }
  if (key === "a" && playerX > 0) {
    playerX -= 1;
  }

  // put player back into grid
  grid[playerY][playerX] = 1;
}

function createEmptyGrid() {
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < rows; y++) {
      emptyGrid[x].push(0);
    }
  }
  return emptyGrid;
}

function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 0) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}
