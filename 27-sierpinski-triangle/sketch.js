// Sierpinski Triangle Demo

let triangleVertices = [
  {x: 400, y: 100},
  {x: 100, y: 700},
  {x: 700, y: 700},
];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinski(triangleVertices, 3);
}

function sierpinski(points, degree) {
  triangle(points[0].x, points[0].y, points[1].x, points[1].y, points[2].x, points[2].y);

  //exit clause, if degree is too small
  if (degree > 0) {
    //pattern
    sierpinski([points[0],
                getMidpoint(points[0], points[1]),
                getMidpoint(points[0], points[2])],
                degree - 1);

    sierpinski([points[1],
                getMidpoint(points[0], points[1]),
                getMidpoint(points[1], points[2])],
                degree - 1);

    sierpinski([points[2],
                getMidpoint(points[0], points[2]),
                getMidpoint(points[1], points[2])],
                degree - 1);
  }
}

function getMidpoint(point1, point2) {
  let xDiff = point1.x + point2.x;
  let yDiff = point1.y + point2.y;
  let midpoint = {x: xDiff/2, y: yDiff/2};
  return midpoint;
}