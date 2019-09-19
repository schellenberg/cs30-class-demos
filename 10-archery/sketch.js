//colored version

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(240);
  stroke(200);
  
  let colors = ["white", "white", "black", "black", "blue", "blue", "red", "red", "yellow", "yellow"];
  
  for (let i = 0; i < 10; i++) {
    fill(colors[i]);
    ellipse(200, 200, 400 - 40*i, 400 - 40*i);
  }

}


// black and white version

// function setup() {
//   createCanvas(400, 400);
// }

// function draw() {
//   background(240);
  
//   for (let circleSize = 400; circleSize >= 40; circleSize = circleSize - 40) {
//     ellipse(200, 200, circleSize, circleSize);
//   }
// }