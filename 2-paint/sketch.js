function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  let horizontalSpeed = abs(mouseX - pmouseX) / 10;
  strokeWeight(horizontalSpeed);
  
  stroke(255, 0, 0);
  line(pmouseX, pmouseY, mouseX, mouseY);
  
}

function keyTyped() {
  if (key === " ") {
    background(0);
  }
}