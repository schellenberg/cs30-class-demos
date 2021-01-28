// Player in Grid

const ROWS = 20;
const COLS = 20;
let grid, cellWidth, cellHeight;
let playerX = 0;
let playerY = 0;
let someMaze;
let playerImg, wallImg, grassImg;

function preload() {
  someMaze = loadJSON("assets/myMaze.json");
  playerImg = loadImage("assets/red-ghost.png");
  wallImg = loadImage("assets/wall.png");
  grassImg = loadImage("assets/grass.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  grid = createEmptyGrid(COLS, ROWS);
  cellWidth = width / COLS;
  cellHeight = height / ROWS;
  //add player to grid
  grid[playerY][playerX] = 9;
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed() {
  let x = Math.floor(mouseX / cellWidth);
  let y = Math.floor(mouseY / cellHeight);

  if (grid[y][x] === 0) { //if empty
    grid[y][x] = 1;       //make it a wall
  }
  else if (grid[y][x] === 1) { //if wall
    grid[y][x] = 0;       //make it empty
  }
}

function keyPressed() {
  if (key === "d") {
    movePlayer(playerX+1, playerY, playerX, playerY, "right");
  }
  if (key === "a") {
    movePlayer(playerX-1, playerY, playerX, playerY, "left");
  }
  if (key === "s") {
    movePlayer(playerX, playerY+1, playerX, playerY, "down");
  }
  if (key === "w") {
    movePlayer(playerX, playerY-1, playerX, playerY, "up");
  }
  if (key === "m") {
    grid = someMaze;
  }
}

function movePlayer(x, y, oldX, oldY, direction) {
  if (x >= 0 && x < COLS && y >= 0 && y < ROWS && grid[y][x] !== 1) {
    grid[y][x] = 9; //new player location
    grid[oldY][oldX] = 0; //remove player from old spot

    if (direction === "right") {
      playerX += 1;
    }
    if (direction === "left") {
      playerX -= 1;
    }
    if (direction === "down") {
      playerY += 1;
    }
    if (direction === "up") {
      playerY -= 1;
    }
  }
}

function displayGrid() {
  for (let y=0; y<ROWS; y++) {
    for (let x=0; x<COLS; x++) {
      if (grid[y][x] === 0) {
        // fill("white");
        image(grassImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 1) {
        // fill("black");
        image(wallImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      else if (grid[y][x] === 9) {
        // fill("red");
        image(playerImg, x*cellWidth, y*cellHeight, cellWidth, cellHeight);
      }
      // rect(x*cellWidth, y*cellHeight, cellWidth, cellHeight);
    }
  }
}

function createEmptyGrid(cols, rows) {
  let empty = [];
  for (let y=0; y<rows; y++) {
    empty.push([]);
    for (let x=0; x<cols; x++) {
      empty[y].push(0);
    }
  }
  return empty;
}