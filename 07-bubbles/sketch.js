// Bubble Object Notation and Arrays Demo

let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  for (let i = 0; i < 10; i++) {
    spawnBubble();
  }

  //spawn a new bubble every half second
  window.setInterval(spawnBubble, 500);
}

function draw() {
  background(220);

  for (let bubble of theBubbles) {
    //randomize movement -- too much coffee
    bubble.dx = random(-5, 5);
    bubble.dy = random(-5, 5);
    
    //move bubble
    bubble.x += bubble.dx;
    bubble.y += bubble.dy;

    //display bubble
    fill(bubble.r, bubble.g, bubble.b);
    circle(bubble.x, bubble.y, bubble.radius * 2);
  }
}

function mousePressed() {
  for (let bubble of theBubbles) {
    //check if this bubble was clicked on
    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      let index = theBubbles.indexOf(bubble);
      theBubbles.splice(index, 1);
    }
  }
}

function spawnBubble() {
  let someBubble = {
    x: random(width),
    y: random(height),
    radius: random(40, 80),
    r: random(255),
    g: random(255),
    b: random(255),
    dx: random(-5, 5),
    dy: random(-5, 5),
  };
  theBubbles.push(someBubble);
}