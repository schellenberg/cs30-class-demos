function setup() {
  createCanvas(400, 400);
  background(255);
  noStroke();
}

function draw() {
  fill(random(255), random(255), random(255), random(255));
  
  
  if (mouseX > width/2) {
    ellipse(random(width), random(height), 25, 25);
  }
  
  else if (mouseX < width/2) {
    rect(random(width), random(height), 25, 25);
  }
}

function keyPressed() {
  background(255);
}
