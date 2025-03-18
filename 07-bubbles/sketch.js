// Bubble Object Notation and Arrays Demo

let theBubbles = [];
let deathSpots = [];

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

  //show graves
  for (let grave of deathSpots) {
    fill("black");
    text("X", grave.x, grave.y);
  }
}

function mousePressed() {
  for (let bubble of theBubbles) {
    //check if this bubble was clicked on
    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
      let index = theBubbles.indexOf(bubble);
      theBubbles.splice(index, 1);

      //add this spot to my death history
      let spot = {
        x: mouseX, 
        y: mouseY,
      };
      deathSpots.push(spot);
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