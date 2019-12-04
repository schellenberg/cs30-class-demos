function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawCircle(width/2, mouseX);
}

function drawCircle(x, radius) {
  fill(radius*4);
  circle(x, height/2, radius*2);
  
  if (radius > 10) {
    drawCircle(x - radius/2, radius/2);
    drawCircle(x + radius/2, radius/2);
  }
}