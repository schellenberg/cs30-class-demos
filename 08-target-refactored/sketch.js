function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(125);
  
  // let circleSize = 400;
  // while (circleSize >= 40) {
  //   ellipse(200, 200, circleSize, circleSize);
  //   circleSize -= 40;
  // }
  
  for (let circleSize = 400; circleSize >= 40; circleSize -= 40) {
    ellipse(200, 200, circleSize, circleSize);
  }
}