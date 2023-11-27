// Collide2D Demos
// How to use another library...

let hit = false;
const poly = []; // stores the vertices for our polygon.

function setup() {
  createCanvas(500, 500);
  // collideDebug(true); // enable debug mode

  // Set x,y positions as vecs:
  poly[0] = createVector(123, 231);
  poly[1] = createVector(10, 111);
  poly[2] = createVector(20, 23);
  poly[3] = createVector(390, 33);
}

function draw() {
  background(255);

  // Draw the polygon by iterating over the 4 created vectors{x, y} stored in poly[]:
  beginShape();
  for (const { x, y } of poly)  {
    vertex(x, y);
  }
  endShape(CLOSE);

  circle(mouseX, mouseY, 45);

  hit = collideCirclePoly(mouseX, mouseY, 45, poly);

  // Enable the hit detection if the circle is wholly inside the polygon:
  // hit = collideCirclePoly(mouseX, mouseY, 45, poly, true);

  // Use vectors as input:
  // const mouse = createVector(mouseX, mouseY);

  // hit = collideCirclePolyVector(mouse, 45, poly);
  // Or:
  // hit = collideCirclePolyVector(mouseX, mouseY, 45, poly, true);

  if (hit) {
    stroke("red");
  }
  else {
    stroke("black");
  }
  
  print("colliding?", hit);
}