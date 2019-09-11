function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  let horizontalSpeed = abs(mouseX - pmouseX);
  if (horizontalSpeed > 30) {
    horizontalSpeed = 30;
  }
  strokeWeight(horizontalSpeed);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyTyped() {
  console.log(key);
  if (key === "b") {
    background(0);
    stroke(255);
  }
  else if (key === "w") {
    background(255);
  }
}