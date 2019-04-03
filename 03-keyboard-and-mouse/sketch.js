function setup() {
  createCanvas(400, 400);
  background(220);
  noStroke();
}

function draw() {
  
}

function mouseClicked() {
  if (keyIsPressed && (key === "r" || key === "R")) {
    fill(255, 0, 0);
    rect(mouseX, mouseY, 50, 50);
  }
  if (keyIsPressed && (key === "e" || key === "E")) {
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 50, 50);
  }
}

function keyTyped() {
  if (key === "b" || key === "B") {
    background(0);
  }
  if (key === "w" || key === "W") {
    background(255);
  }
  
}