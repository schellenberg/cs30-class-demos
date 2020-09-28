// 2d Array Demo

let grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = generateRandomGrid(10);
}

function draw() {
  background(220);
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