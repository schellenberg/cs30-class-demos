// Perlin Noise Demo
// Dan Schellenberg
// March 17/26


let time = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  fill("black");

  let x = noise(time) * width;
  let y = noise(time + 1000) * height;
  circle(x, y, 50);

  time += 0.01;
}
