/* eslint-disable indent */
// Sierpinski Triangle

let initialTriangle = [
  {x: 600, y: 20},
  {x: 100, y: 780},
  {x: 1100, y: 780}
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinski(initialTriangle, 4);
}

function sierpinski(points, depth) {
  triangle(points[0].x, points[0].y, 
           points[1].x, points[1].y,
           points[2].x, points[2].y,
  );

  if (depth > 0) {
    //draw the lower left triangle
    sierpinski([midpoint(points[0], points[1]),
                midpoint(points[1], points[2]),
                points[1]],
                depth - 1);

  }
}

function midpoint(point1, point2) {
  let newX = (point1.x + point2.x) / 2;
  let newY = (point1.y + point2.y) / 2;
  return {x: newX, y: newY};
}