//Rotation demo for Kyran

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  push(); //saving the translation grid / matrix
  translate(100, 200);
  rotate(mouseX/100);
  fill("black");
  rect(0, 0, 150, 50);
  pop();  //setting it back to the last save

  rect(600, 400, 50, 200);
}
