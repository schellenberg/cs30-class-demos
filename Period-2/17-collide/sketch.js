// Collide2d Demo

let hit;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  hit = collideRectCircle(200, 200, 100, 150, mouseX, mouseY, 100);

  if (hit) {
    fill("red");
  }
  else {
    fill("white");
  }

  rect(200, 200, 100, 150);
  circle(mouseX, mouseY, 100);


  console.log(hit);
}
