// Generative Art Demo
// Mar 15, 2024

let tileSize = 25;
let theTiles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let y = 0; y < height; y += tileSize) {
    for (let x = 0; x < width; x += tileSize) {
      let someTile = spawnTile(x, y);
      theTiles.push(someTile);
    }
  }
}

function draw() {
  background(220);

  for (let someTile of theTiles) {
    line(someTile.x1, someTile.y1, someTile.x2, someTile.y2);
  }
}

function spawnTile(x, y) {
  let choice = random(100);
  let tile;

  if (choice > 50) {
    //negative slope
    tile = {
      x1: x - tileSize/2,
      y1: y - tileSize/2,
      x2: x + tileSize/2,
      y2: y + tileSize/2,
    };
  }
  else {
    //positive slope
    tile = {
      x1: x - tileSize/2,
      y1: y + tileSize/2,
      x2: x + tileSize/2,
      y2: y - tileSize/2,
    };
  }

  return tile;
}