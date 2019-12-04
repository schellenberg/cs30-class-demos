// Maze Generation
// Dan Schellenberg
// Adapted from the Coding Challenge done by Daniel Shiffman
//  https://www.youtube.com/watch?v=HyK_Q5rrcr4

// global variables
let cols, rows;
let cellSize = 20;
let current;
let grid = [];
let stack = [];

function setup() {
  createCanvas(400, 400);
  // frameRate(5);
  cols = floor(width / cellSize);
  rows = floor(height / cellSize);

  // create grid of cells
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let someCell = new Cell(x, y);
      grid.push(someCell);
    }
  }

  // start making maze from top left corner
  current = grid[0];
}

function draw() {
  background(50);
  // display the grid cells
  for (let i = 0; i < grid.length; i++) {
    grid[i].display();
  }

  // look for a new spot to visit in the grid
  current.visited = true;
  current.highlight();

  let next = current.checkNeighbors();
  if (next) {
    next.visited = true;
    stack.push(current);

    removeWalls(current, next);
    current = next;
  }

  // no current neighbors, so check stack to restart from new location
  else if (stack.length > 0) {
    current = stack.pop();
  }

  else {
    noLoop();
    saveJSON(grid, "maze1.json", true);
  }

}



function index(i, j) {
  // given an x, y value, return the index value of the location in a 1d array

  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    // check for edge cases
    return -1;
  }

  else {
    // the location exists in the grid array
    return i + j * cols;
  }
}



function removeWalls(firstCell, secondCell) {
  let xIndexDifference = firstCell.i - secondCell.i;
  if (xIndexDifference === 1) {
    firstCell.walls.left = false;
    secondCell.walls.right = false;
  }
  else if (xIndexDifference === -1) {
    firstCell.walls.right = false;
    secondCell.walls.left = false;
  }

  let yIndexDifference = firstCell.j - secondCell.j;
  if (yIndexDifference === 1) {
    firstCell.walls.top = false;
    secondCell.walls.bottom = false;
  }
  else if (yIndexDifference === -1) {
    firstCell.walls.bottom = false;
    secondCell.walls.top = false;
  }
}
