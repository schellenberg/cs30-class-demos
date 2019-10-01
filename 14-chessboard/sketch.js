function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawChessBoard();
}

function drawChessBoard() {
  let cellSize;
  if (width >= height) {
    cellSize = height/8;
  }
  else if (height > width) {
    cellSize = width/8;
  }
  let isWhite = true;
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (isWhite) {
        fill(255);
      }
      else {
        fill(0);
      }
      rect(x * cellSize, y * cellSize, cellSize, cellSize);
      isWhite = !isWhite;
    }
    isWhite = !isWhite;
  }
}