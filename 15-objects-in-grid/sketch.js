// 2d Array Demo -- now with objects!!

let grid;
let cellWidth;
let cellHeight;
const GRIDSIZE = 20;
let playerX = 8;
let playerY = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  grid = generateRandomGrid(GRIDSIZE);

  //place player
  grid[playerY][playerX].isPlayerHere = true;
  grid[playerY][playerX].isObstacle = false;

  cellWidth = width / grid[0].length;
  cellHeight = height / grid.length;
}

function draw() {
  background(220);
  displayGrid();
}

function mousePressed() {
  let cellX = floor(mouseX / cellWidth);
  let cellY = floor(mouseY / cellHeight);

  toggleCell(cellX, cellY);   //self
}

function toggleCell(cellX, cellY) {
  if (cellX >= 0 && cellX < GRIDSIZE && cellY >= 0 && cellY < GRIDSIZE) {
    grid[cellY][cellX].isObstacle = !grid[cellY][cellX].isObstacle;
  }
}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(GRIDSIZE);
  }
  // if (key === "c") {
  //   grid = generateEmptyGrid(GRIDSIZE);
  // }
  if (key === "w") {
    //move up
    if (!grid[playerY-1][playerX].isObstacle) {
      grid[playerY][playerX].isPlayerHere = false; //resetting players current location to white
      grid[playerY][playerX].wasPlayerHere = true;
      playerY -= 1;
      grid[playerY][playerX].isPlayerHere = true; //set new location to red
    }
  }
  if (key === "s") {
    //move down
    if (!grid[playerY+1][playerX].isObstacle) {
      grid[playerY][playerX].isPlayerHere = false; //resetting players current location to white
      grid[playerY][playerX].wasPlayerHere = true;
      playerY += 1;
      grid[playerY][playerX].isPlayerHere = true; //set new location to red
    }
  }
  if (key === "d") {
    //move right
    if (!grid[playerY][playerX+1].isObstacle) {
      grid[playerY][playerX].isPlayerHere = false; //resetting players current location to white
      grid[playerY][playerX].wasPlayerHere = true;
      playerX += 1;
      grid[playerY][playerX].isPlayerHere = true; //set new location to red
    }
  }
  if (key === "a") {
    //move left
    if (!grid[playerY][playerX-1].isObstacle) {
      grid[playerY][playerX].isPlayerHere = false; //resetting players current location to white
      grid[playerY][playerX].wasPlayerHere = true;
      playerX -= 1;
      grid[playerY][playerX].isPlayerHere = true; //set new location to red
    }
  }
}

function displayGrid() {
  for (let y=0; y<grid.length; y++) {
    for (let x=0; x<grid[y].length; x++) {
      if (grid[y][x].isPlayerHere) {
        fill("red");
      }
      else if (grid[y][x].wasPlayerHere) {
        fill("green");
      }
      else if (grid[y][x].isObstacle) {
        fill("black");
      }
      else {
        fill("white");
      }

      rect(cellWidth*x, cellHeight*y, cellWidth, cellHeight);
    }
  }
}

// function generateEmptyGrid(gridSize) {
//   let grid = [];
//   for (let i=0; i<gridSize; i++) {
//     grid.push([]);
//     for (let j=0; j<gridSize; j++) {
//       grid[i].push(0);
//     }
//   }
//   return grid;
// }

function generateRandomGrid(gridSize) {
  let grid = [];
  for (let i=0; i<gridSize; i++) {
    grid.push([]);
    for (let j=0; j<gridSize; j++) {
      if (random(100) < 50) {
        grid[i].push(new Cell(false));
      }
      else {
        grid[i].push(new Cell(true));
      }
    }
  }
  return grid;
}


class Cell {
  constructor(isObstacle) {
    this.isObstacle = isObstacle;
    this.isPlayerHere = false;
    this.wasPlayerHere = false;
  }


}