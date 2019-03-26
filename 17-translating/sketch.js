// Translating and Rotating Demo - Clock

function setup() {
  // force the canvas to be a square
  if (windowWidth > windowHeight) {
    createCanvas(windowHeight, windowHeight);
  }
  else {
    createCanvas(windowWidth, windowWidth);
  }
  angleMode(DEGREES);
}

function draw() {
  background(220);

  translate(width/2, height/2);
  clockSetup();
  hourTickMarks();
  minuteTickMarks();
}

function minuteTickMarks() {
  strokeCap(SQUARE);
  strokeWeight(3);

  for (let minuteMark = 0; minuteMark < 60; minuteMark++) {
    line(width*0.34, 0, width*0.42, 0);
    rotate(360/60);
  }
}

function hourTickMarks() {
  strokeCap(SQUARE);
  strokeWeight(10);

  for (let hourMark = 0; hourMark < 12; hourMark++) {
    line(width*0.3, 0, width*0.42, 0);
    rotate(360/12);
  }
}

function clockSetup() {
  // clock face
  fill(255);
  strokeWeight(10);
  ellipse(0, 0, width*0.9, height*0.9);

  // center point
  fill(0);
  strokeWeight(2);
  ellipse(0, 0, 3, 3);
}