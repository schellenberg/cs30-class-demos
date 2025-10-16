// Terrain Generation with Perlin Noise

let terrain = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let someRect = spawnRectangle(100, 300, 500);
  terrain.push(someRect);
}

function draw() {
  background(220);

  for (let theRect of terrain) {
    rect(theRect.x, theRect.y, theRect.w, theRect.h);
  }
}

function spawnRectangle(leftSide, rectWidth, rectHeight) {
  let theRect = {
    x: leftSide,
    y: height - rectHeight,
    w: rectWidth,
    h: rectHeight,
  };

  return theRect;
}