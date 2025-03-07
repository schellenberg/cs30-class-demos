// Generative Art Demo
// Using Object Notation and Arrays
// March 7, 2025

let someLine;

function setup() {
  createCanvas(windowWidth, windowHeight);
  someLine = spawnLine(width/2, height/2, 400);
}

function draw() {
  background(220);

  line(someLine.x1, someLine.y1, someLine.x2, someLine.y2);
}

function spawnLine(x, y, theSize) {
  let theLine;
  let choice = random(100);
  if (choice < 50) {
    //negative slope
    theLine = {
      x1: x - theSize/2,
      y1: y - theSize/2,
      x2: x + theSize/2,
      y2: y + theSize/2,
    };
  }
  else {
    //positive slope
    theLine = {
      x1: x - theSize/2,
      y1: y + theSize/2,
      x2: x + theSize/2,
      y2: y - theSize/2,
    };
  }
  return theLine;
}