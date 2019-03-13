//Chess Board

let isFilledWithWhite = true;
let cellSize;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cellSize = pickCellSize();
}

function draw() {
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (isFilledWithWhite) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
      isFilledWithWhite = !isFilledWithWhite;
    }
    isFilledWithWhite = !isFilledWithWhite;
  }
}

function pickCellSize() {
  if (width > height) {
    return height/8;
  }
  else {
    return width/8;
  }
}

function windowResized() {
  createCanvas(windowWidth, windowHeight);
  cellSize = pickCellSize();
}