// Collision Demo

let hit = false;
let converseLogo;

async function setup() {
  createCanvas(windowWidth, windowHeight);
  converseLogo = await loadImage('logo.jpg');
  imageMode(CENTER);
}

function draw() {
  background('white');

  hit = collideRectCircle(300, 400, 200, 150, mouseX, mouseY, 100);

  if (hit) {
    fill('red');
  }
  else {
    fill('black');
  }

  //comment out this image to see the simpler version
  image(converseLogo, mouseX, mouseY, 160, 128);

  rect(300, 400, 200, 150);
  
  //uncomment the circle to see the simpler version
  // circle(mouseX, mouseY, 100);
}
