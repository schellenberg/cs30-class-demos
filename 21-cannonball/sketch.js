let cannonX;
let cannonY;
let cannonWidth;
let cannonLength;
let cannonAngle;
let bullets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  cannonX = 75;
  cannonY = height - 150;
  cannonWidth = 50;
  cannonLength = 125;
  cannonAngle = 0;
}

function draw() {
  background(220);
  
  displayCannon();
  updateBullets();
}

function displayCannon() {
  push(); //save the transformation matrix
  translate(cannonX, cannonY);
  cannonAngle = atan2(mouseY - cannonY, mouseX - cannonX);
  rotate(cannonAngle);
  rect(0, -cannonWidth/2, cannonLength, cannonWidth);
  circle(0, 0, cannonWidth);
  pop(); //reload the old transformation matrix
}

function mouseClicked() {
  fire();
}

function fire() {
  let thisBullet = {
    x: cannonX,
    y: cannonY,
    radius: cannonWidth,
    angle: cannonAngle,
    speed: 15
  };
  bullets.push(thisBullet);
}

function updateBullets() {
  for (let i = bullets.length - 1; i > 0; i--) {
    if (bullets[i].x < 0 || bullets[i].x > width ||
        bullets[i].y < 0 || bullets[i].y > height) {
          bullets.splice(i, 1);
    }
    else {
      bullets[i].x += bullets[i].speed * cos(bullets[i].angle);
      bullets[i].y += bullets[i].speed * sin(bullets[i].angle);
      circle(bullets[i].x, bullets[i].y, bullets[i].radius);
    }
  }
}