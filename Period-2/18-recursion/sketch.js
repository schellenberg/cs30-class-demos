// Recursive Circles Demo

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawCircle(width/2, width/2);
}

function drawCircle(x, radius) {
  let fillColor = map(radius, width/2, 50, 255, 50);
  fill(fillColor);
  circle(x, height/2, radius * 2);
  //exit clause
  if (radius > 50) {
    drawCircle(x - radius/2, radius/2);
    drawCircle(x + radius/2, radius/2);
  }
}
