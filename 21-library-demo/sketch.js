// Library Demo

let scribble = new Scribble();

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  scribble.scribbleRect( mouseX, mouseY, 100, 50 );
}
