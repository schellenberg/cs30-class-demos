// live version at https://editor.p5js.org/schellenberg/sketches/eEMkFLoAR

let x;
let dx = -5;  //speed of x

function setup() {
  createCanvas(400, 400);
  x = width/2;
}

function draw() {
  background(0);
  
  //move ball
  x = x + dx;
  
  //check to see if we need to bounce
  if (x < 0 || x > width) {
    dx = dx * -1;
  }
  
  fill(255);
  circle(x, height/2, 50);
}