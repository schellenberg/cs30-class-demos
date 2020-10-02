// 2d Array Demo

let grid;
let cellWidth;
let cellHeight;
const GRIDSIZE = 50;
let playerX = 8;
let playerY = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = generateRandomGrid(GRIDSIZE);

  //place player
  grid[playerY][playerX] = 9;

  cellWidth = width / grid[0].length;
  cellHeight = height / grid.length;
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed() {
  let cellX = floor(mouseX / cellWidth);
  let cellY = floor(mouseY / cellHeight);

  toggleCell(cellX, cellY);   //self
}

function toggleCell(cellX, cellY) {
  if (cellX >= 0 && cellX < GRIDSIZE && cellY >= 0 && cellY < GRIDSIZE) {
    if (grid[cellY][cellX] === 0) {
      grid[cellY][cellX] = 1;
    }
    else {
      grid[cellY][cellX] = 0;
    }
  }
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(GRIDSIZE);
  }
  if (key === "c") {
    grid = generateEmptyGrid(GRIDSIZE);
  }
  if (key === "w") {
    //move up
    if (grid[playerY-1][playerX] === 0) {
      grid[playerY][playerX] = 0; //resetting players current location to white
      playerY -= 1;
      grid[playerY][playerX] = 9; //set new location to red
    }
  }
  if (key === "s") {
    //move down
    if (grid[playerY+1][playerX] === 0) {
      grid[playerY][playerX] = 0; //resetting players current location to white
      playerY += 1;
      grid[playerY][playerX] = 9; //set new location to red
    }
  }
  if (key === "d") {
    //move right
    if (grid[playerY][playerX+1] === 0) {
      grid[playerY][playerX] = 0; //resetting players current location to white
      playerX += 1;
      grid[playerY][playerX] = 9; //set new location to red
    }
  }
  if (key === "a") {
    //move left
    if (grid[playerY][playerX-1] === 0) {
      grid[playerY][playerX] = 0; //resetting players current location to white
      playerX -= 1;
      grid[playerY][playerX] = 9; //set new location to red
    }
  }
}

function displayGrid() {
  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 9) {
        fill("red");
      }
      else {
        fill("black");
      }

      rect(cellWidth*x, cellHeight*y, cellWidth, cellHeight);
    }
  }
}

function generateEmptyGrid(gridSize) {
  let grid = [];
  for (let i=0; i<gridSize; i++) {
    grid.push([]);
    for (let j=0; j<gridSize; j++) {
      grid[i].push(0);
    }
  }
  return grid;
}

function generateRandomGrid(gridSize) {
  let grid = [];
  for (let i=0; i<gridSize; i++) {
    grid.push([]);
    for (let j=0; j<gridSize; j++) {
      if (random(100) < 50) {
        grid[i].push(0);
      }
      else {
        grid[i].push(1);
      }
    }
  }
  return grid;
}