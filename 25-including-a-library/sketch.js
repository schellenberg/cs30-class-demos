// Scribble Library demo

let scribble = new Scribble();

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
  strokeWeight(10);
  stroke("blue");
  scribble.scribbleRect(500, 200, 500, 200);
}

function draw() {
}
