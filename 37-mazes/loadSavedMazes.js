// Maze Loader
// Dan Schellenberg

// global variables
let cols, rows;
let cellSize = 20;
let grid = [];
let length;
let current = 0;

function preload() {
  grid = loadJSON("mazes/maze1.json");
}

function setup() {
  // required due to loadJSON returning an object, not an array
  length = Object.keys(grid).length;

  cols = grid[length-1].i;
  rows = grid[length-1].j;

  let c = createCanvas(cellSize * (cols+2), cellSize * (rows+2));
  c.position(cellSize, cellSize);
}

function draw() {
  background(255);
  // display the grid cells
  for (let i = 0; i < length; i++) {
    display(i);
  }

  // show character moving
  move();
  showCharacter(current);
}

function display(cellNumber) {
  // x and y are the coordinates to display this cell
  let x = grid[cellNumber].i * cellSize;
  let y = grid[cellNumber].j * cellSize;

  // draw the walls, if that wall is set to true
  stroke(0);
  if (grid[cellNumber].walls.top) {
    line(x, y, x + cellSize, y);
  }
  if (grid[cellNumber].walls.right) {
    line(x + cellSize, y, x + cellSize, y + cellSize);
  }
  if (grid[cellNumber].walls.bottom) {
    line(x, y + cellSize, x + cellSize, y + cellSize);
  }
  if (grid[cellNumber].walls.left) {
    line(x, y, x, y + cellSize);
  }
}


function showCharacter(cellNumber) {
  // x and y are the coordinates to display this cell
  let x = grid[cellNumber].i * cellSize;
  let y = grid[cellNumber].j * cellSize;
  fill(0, 255, 0, 100);
  noStroke();
  rect(x, y, cellSize, cellSize);
}

function move() {
  if (key === 'w' && !grid[current].walls.top) {
    current -= cols+1;
  }
  if (key === 's' && !grid[current].walls.bottom) {
    current += cols+1;
  }
  if (key === 'a' && !grid[current].walls.left) {
    current -= 1;
  }
  if (key === 'd' && !grid[current].walls.right) {
    current += 1;
  }
}
