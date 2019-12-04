// Sierpinski Triangle

let triangleVertices = [
  {x: 400, y: 100},
  {x: 100, y: 600},
  {x: 700, y: 600}
];

let depth = 0;
let colorList = ["blue", "red", "orange", "green", "yellow", "pink", "aquamarine", "maroon"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinski(triangleVertices, depth);
}

function mousePressed() {
  if (depth < 8) {
    depth++;
  }
}

function sierpinski(points, level) {
  noStroke();
  if (level > colorList.length-1) {
    colorList.push(color(random(255), random(255), random(255)));
  }
  fill(colorList[level]);
  triangle(points[0].x, points[0].y, 
           points[1].x, points[1].y,
           points[2].x, points[2].y);

  if (level > 0) {
    sierpinski([points[0],
                getMidpoint(points[0], points[1]),
                getMidpoint(points[0], points[2])],
                level - 1);
    
    sierpinski([points[1],
                getMidpoint(points[0], points[1]),
                getMidpoint(points[1], points[2])],
                level - 1);

    sierpinski([points[2],
                getMidpoint(points[2], points[1]),
                getMidpoint(points[0], points[2])],
                level - 1);
  }
}

function getMidpoint(point1, point2) {
  let midX = (point1.x + point2.x) / 2;
  let midY = (point1.y + point2.y) / 2;
  return {x: midX, y: midY};
}