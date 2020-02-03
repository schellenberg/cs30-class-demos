function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (mouseY < 200) {
    background("blue");
    fill(0);
    rect(50, 100, 200, 200);
    fill("red");
    circle(mouseX, mouseY, 50);
  }
  else {
    background("white");
    noFill();
    strokeWeight(5);
    triangle(200,50,100,250,300,250);
    triangle(100,125,300,125,200,325);
  }
}
