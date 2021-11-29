// HMTL Demo

let someText;

function setup() {
  let canvas = createCanvas(300, 300);
  canvas.position(100, 400);

  someText = createP("Some HTML string");
  someText.position(500, 500);
  someText.class("instructions");
  someText.style("color", "red");
  someText.style("font-size", "42pt");
}

function draw() {
  background(220);
  circle(mouseX, mouseY, 100);
}

function mousePressed() {
  someText.html('Something <span style="color: green;">that</span> belongs here...');
}
