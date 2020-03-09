//Try to figure out what this will do without running it!

function setup() {
  createCanvas(300, 250);
}

function draw() {
  for (let i=0; i<width; i+= 5) {
    for (let j=0; j<height; j+= 5) {
      fill(int(random(255)), int(random(255)), int(random(255)));
      noStroke();
      rect(i, j, 5, 5);
    }
  }
}