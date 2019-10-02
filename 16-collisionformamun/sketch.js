let score = 0;
let hasClicked = false;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  if (mouseIsPressed && !hasClicked) {
    score++;
    hasClicked = true;
  }
  if (!mouseIsPressed && hasClicked) {
    hasClicked = false;
  }
  
  textSize(50);
  textAlign(CENTER, CENTER);
  text(score, width/2, height/2);
}
