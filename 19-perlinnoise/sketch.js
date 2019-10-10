let x, y, radius;
let time = 0;

function setup() {
  createCanvas(400, 400);
  x = width/2;
  y = height/2;
  radius = 50;
}

function draw() {
  background(220);
  
  x = noise(time) * width;
  radius = noise(time+100) * 50;
  
  fill(0);
  circle(x, y, radius);
  
  time += 0.05;
}