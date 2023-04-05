// Game of Life -- Scribble Style
// Dan Schellenberg
// March 21, 2023

const ROWS = 10;
const COLS = 10;
let grid;
let cellSize;
let autoUpdate = true;
let gosperGun;
let scribble = new Scribble();

function preload() {
  gosperGun = loadJSON("gosper.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandom2dArray(ROWS, COLS);

  //fill the largest square area possible...
  if (width < height) {
    cellSize = width/COLS;
  }
  else {
    cellSize = height/ROWS;
  }
  background("white");
  displayGrid(grid);
}

function draw() {
  // noLoop(); //stopping the draw loop from repeating
  // background(220);
  // if (autoUpdate && frameCount % 10 === 0) {
  //   grid = updateGrid();
  // }
  // displayGrid(grid);
}

function keyTyped() {
  if (key === "r") {
    grid = createRandom2dArray(ROWS, COLS);
  }
  else if (key === "e") {
    grid = createEmpty2dArray(ROWS, COLS);
  }
  else if (key === " ") {
    grid = updateGrid();
    background("white");
    displayGrid(grid);
  }
  else if (key === "a") {
    autoUpdate = !autoUpdate;
  }
  else if (key === "g") {
    //assumes a 40x40 grid
    grid = gosperGun;
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  toggleCell(x, y);
  background("white");
  displayGrid(grid);
}

function updateGrid() {
  let nextTurn = createEmpty2dArray(ROWS, COLS);

  //look at every cell
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      //count the neighbours
      let neighbours = 0;

      //look at all cells around
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          //detect edge cases
          if (y+i >= 0 && y+i < ROWS && x+j >= 0 && x+j < COLS) {
            neighbours += grid[y+i][x+j];
          }
        }
      }

      //be careful about counting self...
      neighbours -= grid[y][x];

      //apply rules
      if (grid[y][x] === 1) { //alive
        if (neighbours === 2 || neighbours === 3) {
          nextTurn[y][x] = 1; //stay alive
        }
        else {
          nextTurn[y][x] = 0; //died from being lonely or overpopulated
        }
      }

      if (grid[y][x] === 0) { //dead
        if (neighbours === 3) {
          nextTurn[y][x] = 1; //new birth
        }
        else {
          nextTurn[y][x] = 0; //stay dead
        }
      }
    }
  }

  return nextTurn;
}

function toggleCell(x, y) {
  //sanity check
  if (x >= 0 && x < COLS && y >= 0 && y < ROWS) {
    if (grid[y][x] === 0) {
      grid[y][x] = 1;
    }
    else if (grid[y][x] === 1) {
      grid[y][x] = 0;
    }
  }
}

function displayGrid(grid) {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 0) {
        stroke("orange");
        fill("orange");
      }
      if (grid[y][x] === 1) {
        stroke("blue");
        fill("blue");
      }
      let xCoords = [x*cellSize, x*cellSize + cellSize, x*cellSize + cellSize, x*cellSize];
      let yCoords = [y*cellSize, y*cellSize, y*cellSize + cellSize, y*cellSize + cellSize];
      scribble.scribbleFilling(xCoords, yCoords, 5, 300);
      scribble.scribbleRect(x*cellSize + cellSize/2, y*cellSize + cellSize/2, cellSize, cellSize);
    }
  }
}

function createEmpty2dArray(ROWS, COLS) {
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < COLS; x++) {
      newGrid[y].push(0);
    }
  }
  return newGrid;
}

function createRandom2dArray(ROWS, COLS) {
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < COLS; x++) {
      if (random(100) > 50) {
        newGrid[y].push(0);
      }
      else {
        newGrid[y].push(1);
      }
    }
  }
  return newGrid;
}