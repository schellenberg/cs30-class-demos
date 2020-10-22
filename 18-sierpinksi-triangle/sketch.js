// Sierpinski Triangle Demo

let triangleVertices = [
  {x: 600, y: 100},
  {x: 100, y: 800},
  {x: 1100, y: 800}
];

let levelsDeep = 1;

function mousePressed() {
  levelsDeep++;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinski(triangleVertices, levelsDeep);
}

function sierpinski(points, depth) {
  let theColors = ["red", "green", "blue", "white", "yellow",
                   "black", "orange", "brown", "pink"];
  fill(theColors[depth % theColors.length]);
  noStroke();

  triangle(points[0].x, points[0].y,
           points[1].x, points[1].y,
           points[2].x, points[2].y);
  
  //exit clause
  if (depth > 0) {
    sierpinski([points[0],
               getMidpoint(points[0], points[1]),
               getMidpoint(points[0], points[2])],
               depth-1);

    sierpinski([points[1],
                getMidpoint(points[0], points[1]),
                getMidpoint(points[1], points[2])],
                depth-1);

    sierpinski([points[2],
                  getMidpoint(points[0], points[2]),
                  getMidpoint(points[1], points[2])],
                  depth-1);
  }


}

function getMidpoint(point1, point2) {
  let xDifference = point1.x + point2.x;
  let yDifference = point1.y + point2.y;
  let midpoint = {x: xDifference/2, y: yDifference/2};
  return midpoint;
}