// 2d Array Demo

let grid;
let cellWidth;
let cellHeight;
const GRIDSIZE = 10;
let autoPlay = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = generateRandomGrid(GRIDSIZE);
  cellWidth = width / grid[0].length;
  cellHeight = height / grid.length;
}

function draw() {
  background(220);

  if (autoPlay) {
    if (frameCount % 10 === 0) {
      takeNextTurn();
    }
  }

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
  if (key === " ") {
    takeNextTurn();
  }
  if (key === "c") {
    grid = generateEmptyGrid(GRIDSIZE);
  }
  if (key === "a") {
    autoPlay = !autoPlay;
  }
}

function takeNextTurn() {
  let nextTurn = generateEmptyGrid(GRIDSIZE);

  for (let y=0; y<GRIDSIZE; y++) {
    for (let x=0; x<GRIDSIZE; x++) {
      
      //count neighbors
      let neighbors = 0;
      for (let i=-1; i<=1; i++) {
        for (let j=-1; j<=1; j++) {
          if (y+i >= 0 && y+i < GRIDSIZE && x+j >=0 && x+j < GRIDSIZE) {
            neighbors += grid[y+i][x+j];
          }
        }
      }

      //subtract self from neighbor count
      neighbors -= grid[y][x];

      
      //apply the rules
      //only worry about when they are alive, as the nextTurn
      //array is already all set to dead
      
      //if dead
      if (grid[y][x] === 0) {
        if (neighbors === 3) {
          nextTurn[y][x] = 1;
        }
      }

      //if alive
      if (grid[y][x] === 1) {
        if (neighbors === 2 || neighbors === 3) {
          nextTurn[y][x] = 1;
        }
      }
    }
  }

  grid = nextTurn;
}

function displayGrid() {
  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        fill("white");
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