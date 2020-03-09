// Chessboard Demo

let cellSize;
let isBlack = true;

function setup() {
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  cellSize = width / 8;
}

function draw() {
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (isBlack) {
        fill("black");
      }
      else {
        fill("white");
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
      isBlack = !isBlack;
    }
    isBlack = !isBlack;
  }
}

function windowResized() {
  setup();
}