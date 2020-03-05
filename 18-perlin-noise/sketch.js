let x;
let y;
let time;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  time = 0;
}

function draw() {
  background("white");

  //move ball
  x = noise(time) * width;
  y = noise(time + 100) * height;
  time += 0.02;

  //display ball
  fill("black");
  circle(x, y, 50);
}

