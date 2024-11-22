// Collide 2d demo

let hit = false;
const poly = []; // stores the vertices for our polygon.

function setup() {
  createCanvas(800, 600);
  collideDebug(true); // enable debug mode

  // Set x,y positions as vecs:
  poly[0] = createVector(323, 431);
  poly[1] = createVector(210, 311);
  poly[2] = createVector(220, 223);
  poly[3] = createVector(590, 233);
}

function draw() {
  background(255);

  // Draw the polygon by iterating over the 4 created vectors{x, y} stored in poly[]:
  beginShape();
  for (const { x, y } of poly)  {
    vertex(x, y);
  }
  endShape(CLOSE);

  rect(mouseX, mouseY, 45, 100);

  hit = collideRectPoly(mouseX, mouseY, 45, 100, poly);

  if (hit) {
    stroke("red");
    fill("red");
  }
  else {
    stroke("black");
    noFill();
  }
  
  print('colliding?', hit);
}