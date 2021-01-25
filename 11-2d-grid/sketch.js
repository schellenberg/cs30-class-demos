// 2D array demo
// Basic Grid

let grid = [[0,1,0,1,0],
            [0,0,1,0,0],
            [0,1,0,1,0],
            [0,0,1,0,0]];

let rows;
let cols;
let cellWidth;
let cellHeight;

function setup() {
  createCanvas(windowWidth, windowHeight);

  //replace hardcoded grid with empty grid
  grid = createEmptyGrid(30, 20);

  rows = grid.length;
  cols = grid[0].length;
  cellWidth = width / cols;
  cellHeight = height / rows;
}

function draw() {
  background(220);

  for (let y=0; y<rows; y++) {
    for (let x=0; x<cols; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else {
        fill("black");
      }

      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function mousePressed() {
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY / cellHeight);

  if (grid[y][x] === 1) {
    grid[y][x] = 0;
  }
  else if (grid[y][x] === 0) {
    grid[y][x] = 1;
  }
}

function createEmptyGrid(cols, rows) {
  let emptyGrid = [];
  for (let y=0; y<rows; y++) {
    emptyGrid.push([]);
    for (let x=0; x<cols; x++) {
      emptyGrid[y].push(0);
    }
  }
  return emptyGrid;
}