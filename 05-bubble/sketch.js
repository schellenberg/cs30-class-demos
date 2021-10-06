// Bubble Demo

let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight); 
}

function draw() {
  background("white");
  bubbleUp();
  displayBubble();
}

function mousePressed() {
  for (let i=0; i<5; i++) {
    spawnBubble();
  }
}

function spawnBubble() {
  let bubble = {
    x: random(width),
    y: height,
    radius: random(20, 50),
    dx: 0,
    dy: -3,
    theColor: color(random(255), random(255), random(255), random(255)),
    theTime: random(1000),
  };
  theBubbles.push(bubble);
}

function bubbleUp() {
  for (let bubble of theBubbles) {
    bubble.y += bubble.dy;
  
    //jitter sideways
    // bubble.x += random(-5, 5);

    bubble.x = noise(bubble.theTime) * width;
    bubble.theTime += 0.005;
  }
}

function displayBubble() {
  for (let bubble of theBubbles) {
    noStroke();
    fill(bubble.theColor);
    circle(bubble.x, bubble.y, bubble.radius*2);
  }
}