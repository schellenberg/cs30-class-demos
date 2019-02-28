let a = 80;

function setup() {
  createCanvas(700, 400);
  background(0);
  stroke(255);
  noLoop();
}

function draw() {
  line(a, 0, a, height);
  for (let a = 120; a < 200; a += 2) {
    line(a, 0, a, height);
  }
  drawAnotherLine();
  drawYetAnotherLine();
}

function drawAnotherLine() {
  let a = 320;
  line(a, 0, a, height);
}

function drawYetAnotherLine() {
  line(a + 5, 0, a + 5, height);
}