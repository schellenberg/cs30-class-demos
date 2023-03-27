// Character Moving in Grid
// Schellenberg
// March 27, 2023

let grid;

const ROWS = 20;
const COLS = 20;
let cellSize;
let characterX = 0;
let characterY = 0;

let grassImg;
let pavingImg;

function preload() {
  grassImg = loadImage("grass2.png");
  pavingImg = loadImage("paving1.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = createRandomGrid(ROWS, COLS);

  //put player in grid
  grid[characterY][characterX] = 9; //I'm using 9 for the character

  if (width < height) {
    cellSize = width/ROWS;
  }
  else {
    cellSize = height/ROWS;
  }
}

function draw() {
  background(220);
  displayGrid();
}

function keyTyped() {
  if (key === "r") {
    grid = createRandomGrid(ROWS, COLS);
  }
  if (key === "s") { //move down
    moveCharacter(0, 1);
  }
  if (key === "w") { //move up
    moveCharacter(0, -1);
  }
  if (key === "d") { //move right
    moveCharacter(1, 0);
  }
  if (key === "a") { //move left
    moveCharacter(-1, 0);
  }
}

function moveCharacter(x, y) {
  //sanity check for edge cases
  if (characterX + x >= 0 && characterX + x < COLS &&
      characterY + y >= 0 && characterY + y < ROWS) {
    
    //check if going to hit wall
    if (grid[characterY+y][characterX+x] === 0) {
      let tempX = characterX;
      let tempY = characterY;
    
      characterX += x;
      characterY += y;
    
      //update grid
      grid[characterY][characterX] = 9;
      grid[tempY][tempX] = 0;
    }

  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);

  if (grid[y][x] === 0) {
    grid[y][x] = 1;
  }

  else if (grid[y][x] === 1) {
    grid[y][x] = 0;
  }
}

function displayGrid() {
  for (let y = 0; y < ROWS; y++) {
    for (let x = 0; x < COLS; x++) {
      if (grid[y][x] === 1) {
        // fill("black");
        // rect(x * cellSize, y * cellSize, cellSize, cellSize);
        image(grassImg, x * cellSize, y * cellSize, cellSize, cellSize);
      }
      else if (grid[y][x] === 0) {
        // fill("white");
        // rect(x * cellSize, y * cellSize, cellSize, cellSize);
        image(pavingImg, x * cellSize, y * cellSize, cellSize, cellSize);
      }
      else if (grid[y][x] === 9) {
        fill("red");
        rect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
      
    }
  }
}

function createRandomGrid(ROWS, COLS) {
  let newGrid = [];
  for (let y = 0; y < ROWS; y++) {
    newGrid.push([]);
    for (let x = 0; x < COLS; x++) {
      if (random(100) < 50) {
        newGrid[y].push(1);
      }
      else {
        newGrid[y].push(0);
      }
    }
  }
  return newGrid;
}