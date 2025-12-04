// Collide Demo

function setup() {
  createCanvas(400, 400);
}

let hit = false;

function draw() {
  background(255);
  rect(200, 200, 100, 150);
  circle(mouseX, mouseY, 100);

  hit = collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);

  if (hit) {
    stroke("red");
  }
  else {
    stroke("black");
  }
  print('colliding?', hit);
}