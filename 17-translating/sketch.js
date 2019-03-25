// Translating and Rotating Demo


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  push();
    translate(100, 50);
    rotate(mouseX);
    rect(0, 0 , 75, 75);
  pop();

  ellipse(width/2, height/2, width*0.9, height*0.2);
}
