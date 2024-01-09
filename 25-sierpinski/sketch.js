/* eslint-disable indent */
// Sierpinski Triangle - Recursion Demo

let initialTriangle = [
  {x: 400, y: 50},
  {x: 50, y: 550},
  {x: 750, y: 550}
];

let depth = 0;
let theColors = ["black", "red", "blue", "yellow", "brown", "purple"];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(220);
  sierpinski(initialTriangle, depth);
}

function mousePressed() {
  if (depth < theColors.length - 1) {
    depth++;
  }
}

function sierpinski(points, degree) {
  fill(theColors[degree]);
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);

  if (degree > 0) {
    //draw upper triangle
    sierpinski([points[0],
              getMidpoint(points[0], points[1]),
              getMidpoint(points[0], points[2])],
              degree - 1);

    //draw bottom left triangle
    sierpinski([points[1],
              getMidpoint(points[0], points[1]),
              getMidpoint(points[1], points[2])],
              degree - 1);

    //draw bottom right triangle
    sierpinski([points[2],
      getMidpoint(points[0], points[2]),
      getMidpoint(points[1], points[2])],
      degree - 1);
               
  }
}

function getMidpoint(point1, point2) {
  let newX = (point1.x + point2.x)/2;
  let newY = (point1.y + point2.y)/2;
  return {x: newX, y: newY};
}