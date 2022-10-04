let hit = false;
let theColor;

function setup(){ 
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  rect(200, 200, 100, 150);
  rect(mouseX, mouseY, 50, 75);

  hit = collideRectRect(200, 200, 100, 150, mouseX, mouseY, 50, 75);

  if (hit) {
    theColor = "red";
  }
  else {
    theColor = "black";
  }
  stroke(theColor);
  print("colliding?", hit);
}