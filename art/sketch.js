// Generative Art Demo
// Oct 4, 2024

const TILE_SIZE = 100;
let someTile;

function setup() {
  createCanvas(windowWidth, windowHeight);
  someTile = spawnTile(200, 300);
}

function draw() {
  background(220);

  line(someTile.x1, someTile.y1, someTile.x2, someTile.y2);
}

function spawnTile(x, y) {
  let tile;
  let choice = random(100);

  if (choice > 50) {
    //negative slope
    tile = {
      x1: x - TILE_SIZE/2,
      y1: y - TILE_SIZE/2,
      x2: x + TILE_SIZE/2,
      y2: y + TILE_SIZE/2,
    };
  }
  else {
    //positive slope
    tile = {
      x1: x - TILE_SIZE/2,
      y1: y + TILE_SIZE/2,
      x2: x + TILE_SIZE/2,
      y2: y - TILE_SIZE/2,
    };
  }

  return tile;
}
