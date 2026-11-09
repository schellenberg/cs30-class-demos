// character in grid

const CELL_SIZE = 100;
const OPEN_TILE = 0;
const IMPASSIBLE = 1;
const PLAYER = 9;
let rows;
let cols;
let grid;
let thePlayer = {
  x: 0, 
  y: 0,
};
let grassImg;
let stoneImg;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  rows = Math.floor(height/CELL_SIZE);
  cols = Math.floor(width/CELL_SIZE);
  grid = generateRandomGrid(cols, rows);
  //put player in grid
  grid[thePlayer.y][thePlayer.x] = PLAYER;
  grassImg = await loadImage("grass.JPG");
  stoneImg = await loadImage("stone.JPG");
}

function draw() {
  background(220);
  displayGrid();
}

function keyPressed() {
  if (key === 'r') {
    grid = generateRandomGrid(cols, rows);
    grid[thePlayer.y][thePlayer.x] = PLAYER;
  }
  else if (key === 'e') {
    grid = generateEmptyGrid(cols, rows);
    grid[thePlayer.y][thePlayer.x] = PLAYER;
  }
  else if (key === RIGHT_ARROW) {
    movePlayer(thePlayer.x + 1, thePlayer.y);
  }
  else if (key === LEFT_ARROW) {
    movePlayer(thePlayer.x - 1, thePlayer.y);
  }
  else if (key === UP_ARROW) {
    movePlayer(thePlayer.x, thePlayer.y - 1);
  }
  else if (key === DOWN_ARROW) {
    movePlayer(thePlayer.x, thePlayer.y + 1);
  }
}

function movePlayer(x, y) {
  //don't walk off the grid
  if (x >= 0 && x < cols && y >= 0 && y < rows && grid[y][x] === OPEN_TILE) {
    //keep track of where the player was
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;

    //moving the player
    thePlayer.x = x;
    thePlayer.y = y;
  
    //putting the player in the grid
    grid[thePlayer.y][thePlayer.x] = PLAYER;

    //reset the old spot to be an open tile
    grid[oldY][oldX] = OPEN_TILE;
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/CELL_SIZE);
  let y = Math.floor(mouseY/CELL_SIZE);

  //self
  toggleCell(x, y);
}

function toggleCell(x, y) {
  //make sure you're in the grid
  if (x >= 0 && x < cols && y >= 0 && y < rows) {
    if (grid[y][x] === OPEN_TILE) {
      grid[y][x] = IMPASSIBLE;
    }
    else if (grid[y][x] === IMPASSIBLE) {
      grid[y][x] = OPEN_TILE;
    }
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === OPEN_TILE) {
        // fill('white');
        image(stoneImg, x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
      else if (grid[y][x] === IMPASSIBLE) {
        // fill('black');
        image(grassImg, x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
      else if (grid[y][x] === PLAYER) {
        fill("red");
        square(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE);
      }
    }
  }
}

function generateRandomGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      if (random(100) < 50) {
        newGrid[y].push(OPEN_TILE);
      }
      else {
        newGrid[y].push(IMPASSIBLE);
      }
    }
  }
  return newGrid;
}

function generateEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(OPEN_TILE);
    }
  }
  return newGrid;
}
