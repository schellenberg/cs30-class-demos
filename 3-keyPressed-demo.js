function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
}

function keyPressed() {
  if (key === "c") {
    fill("red");
    circle(mouseX, mouseY, 50);
  }
  else if (key === "r") {
    fill("blue");
    rect(mouseX, mouseY, 75, 75);
  }
  else if (key === "w") {
    background(255);
  }
  else if (key === "b") {
    background(0);
  }
}
