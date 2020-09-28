// 2d Array Demo

let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = generateRandomGrid(10);
}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed() {
  if (key === " ") {
    grid = generateRandomGrid(10);
  }
}

function displayGrid() {
  let cellWidth = width / grid[0].length;
  let cellHeight = height / grid.length;

  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x] === 0) {
        fill("black");
      }
      else {
        fill("white");
      }

      rect(cellWidth*x, cellHeight*y, cellWidth, cellHeight);
    }
  }
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