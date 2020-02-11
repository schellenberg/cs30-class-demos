function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  // let diameter = 400;
  // while (diameter >= 40) {
  //   ellipse(200, 200, diameter, diameter);
  //   diameter -= 40;
  // }
  
  for (let diameter = 400; diameter >= 40; diameter -= 40) {
    ellipse(200, 200, diameter, diameter);
  }
}
