//https://editor.p5js.org/schellenberg/sketches/l3Axp-ur

let x;
let dx = 5;
let y;
let dy = 4;
let radius = 25;

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
}

function draw() {
  background(220);
  
  //move
  x += dx;
  y += dy;
  
  //check for bounce
  if (x >= width-radius || x <= 0+radius) {
    dx *= -1;
  }
  if (y >= height-radius || y <= 0+radius) {
    dy *= -1;
  }
  
  //display
  fill("red");
  circle(x, y, radius*2);
}
