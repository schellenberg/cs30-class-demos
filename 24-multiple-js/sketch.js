// Fireworks OOP

let fireworks = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background("black");
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].display();

    //remove if needed
    if (fireworks[i].isDead()) {
      fireworks.splice(i, 1);
    }
  }
}

function mousePressed() {
  let howMany = 100;
  let r = random(255);
  let g = random(255);
  let b = random(255);
  let angle = 0;
  for (let i = 0; i < howMany; i++) {
    spawnSpark(r, g, b, angle);
    angle += 360/howMany;
  }
}

function spawnSpark(r, g, b, angle) {
  let theSpark = new Spark(mouseX, mouseY, 
    cos(angle) + random(-0.2, 0.2), sin(angle) + random(-0.2, 0.2),
    r, g, b);
  fireworks.push(theSpark);
}