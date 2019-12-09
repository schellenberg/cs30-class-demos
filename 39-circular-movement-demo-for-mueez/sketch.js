let theta = -91;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  fill(0);
  
  // figure out where to be
  let x = cos(theta) * 150;
  let y = sin(theta) * 150;
  theta -= 0.5;
  
  if (x > 50) {
    x = 50;
  }
  
  // display
  translate(width/2, 0+150);
  circle(x, y, 25);
  
  
  
}