// Snake Game - Basic Concept Demo

// This is just to demonstrate the basic mechanic of having multiple segments of 
// the snake that follow the head around a grid. No edge detection (or collision
// with the snake itself) has been implemented.

let grid;
let rows = 30;
let cols = 30;
let snake = [];
let direction = "up";
let snakeSize = 10;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  grid = createEmptyGrid(cols, rows);

  // initial location of the snake
  snake.push({x: 15, y: 15});
}

function draw() {
  background(220);
  displayGrid(grid, rows, cols);
  if (frameCount % 5 === 0) {
    update();
  }
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
  if (key === "w") {
    direction = "up";
  }
  if (key === "a") {
    direction = "left";
  }
  if (key === "s") {
    direction = "down";
  }
  if (key === "d") {
    direction = "right";
  }
}

function createEmptyGrid(cols, rows) {
  let emptyGrid = [];
  for (let x = 0; x < cols; x++) {
    emptyGrid.push([]);
    for (let y = 0; y < rows; y++) {
      emptyGrid[x].push("empty");
    }
  }
  return emptyGrid;
}

function update() {
  let nextTurn = createEmptyGrid(cols, rows);

  // move snake by adding new location to start of array, and popping off old location
  if (direction === "up") {
    newX = snake[0].x;
    newY = snake[0].y - 1;
  }
  else if (direction === "down") {
    newX = snake[0].x;
    newY = snake[0].y + 1;
  }
  else if (direction === "left") {
    newX = snake[0].x - 1;
    newY = snake[0].y;
  }
  else if (direction === "right") {
    newX = snake[0].x + 1;
    newY = snake[0].y;
  }

  // add the new location to the front of the snake array
  snake.unshift({x: newX, y: newY});


  // remove tail of snake until it is the correct size
  //   this should allow you to start with whatever size you want
  while (snake.length > snakeSize) {
    snake.pop();
  }

  // put snake into the grid for next turn
  for (let i = 0; i < snake.length; i++) {
    let location = snake[i];
    nextTurn[location.y][location.x] = "snake";
  }
  
  grid = nextTurn;
}

function displayGrid(grid, rows, cols) {
  let cellSize = width / cols;
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === "empty") {
        fill("white");
      }
      else if (grid[y][x] === "snake") {
        fill("black");
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}
