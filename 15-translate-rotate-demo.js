function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);

  push();  //save transformations state
  translate(100, 50);
  rotate(mouseX);
  rect(0, 0, 75, 100);
  pop();   //put the transformations back
  
  ellipse(300, 150, 70, 120);
}