// Terrain Generation Demo

let terrain = [];
const NUMBER_OF_RECTS = 2000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  generateTerrain(width/NUMBER_OF_RECTS);
}

function draw() {
  background(220);
  stroke("green");
  fill("green");

  for (let someRect of terrain) {
    rect(someRect.x, someRect.y, someRect.w, someRect.h);
  }
}

function generateTerrain(widthOfRect) {
  let time = 0;
  let delaTime = 0.002;
  for (let i = 0; i < NUMBER_OF_RECTS; i++) {
    let theHeight = noise(time) * height;
    terrain.push(spawnRectangle(i * widthOfRect, theHeight, widthOfRect));
    time += delaTime;
  }
}

function spawnRectangle(leftSide, rectHeight, rectWidth) {
  let theRect = {
    x: leftSide,
    y: height - rectHeight,
    w: rectWidth,
    h: rectHeight,
  };

  return theRect;
}