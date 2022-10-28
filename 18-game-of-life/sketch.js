// Game of Life
// Schellenberg
// Oct 27, 2022

const ROWS = 40;
const COLS = 40;
let grid;
let cellWidth;
let cellHeight;
let autoPlay = false;
let gosperGun;

function preload() {
  gosperGun = loadJSON("gosper.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellWidth = width/COLS;
  cellHeight = height/ROWS;
  grid = createRandom2dArray(COLS, ROWS);
}

function draw() {
  background(220);
  if (autoPlay && frameCount % 3 === 0) {
    grid = takeTurn(grid);
  }
  displayGrid(grid);
}

function keyPressed() {
  if (key === "e") {
    grid = create2dArray(COLS, ROWS);
  }
  if (key === " ") {
    grid = takeTurn(grid);
  }
  if (key === "a") {
    autoPlay = !autoPlay;
  }
  if (key === "g") {
    grid = gosperGun;
  }
}

function takeTurn(grid) {
  let nextTurn = create2dArray(COLS, ROWS);

  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      let neighbours = 0;

      //look at all cells around this one...
      for (let i=-1; i<=1; i++) {
        for (let j=-1; j<=1; j++) {
          //edge case check
          if (y+i >= 0 && y+i < ROWS && x+j >= 0 && x+j < COLS) {
            neighbours += grid[y+i][x+j];
          }
        }
      }

      //don't count self!
      neighbours -= grid[y][x];

      //apply rules
      if (grid[y][x] === 1) { //alive
        if (neighbours === 2 || neighbours === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }

      if (grid[y][x] === 0) { //dead
        if (neighbours === 3) {
          nextTurn[y][x] = 1;
        }
        else {
          nextTurn[y][x] = 0;
        }
      }
    }
  }

  return nextTurn;
}

function mousePressed() {
  let xPos = Math.floor(mouseX/cellWidth);
  let yPos = Math.floor(mouseY/cellHeight);

  if (grid[yPos][xPos] === 0) {
    grid[yPos][xPos] = 1;
  }
  else if (grid[yPos][xPos] === 1) {
    grid[yPos][xPos] = 0;
  }
}

function displayGrid(grid) {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        fill("white");
      }
      else if (grid[y][x] === 1) {
        fill("black");
      }
      rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function create2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
      emptyArray[y].push(0);
    }
  }
  return emptyArray;
}

function createRandom2dArray(COLS, ROWS) {
  let emptyArray = [];
  for (let y=0; y<ROWS; y++) {
    emptyArray.push([]);
    for (let x=0; x<COLS; x++) {
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