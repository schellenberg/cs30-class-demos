// Typewriter demo for Hayden

function setup() {
  createCanvas(windowWidth, windowHeight/2);
  typeStuff("hey there");
}

function draw() {
  background(220);
}

function mousePressed() {
  typeStuff("another thing");
}

function typeStuff(sentence) {
  $("#typeArea").clearIt().typeIt(sentence, 0.1, "text").hideCursor();
}