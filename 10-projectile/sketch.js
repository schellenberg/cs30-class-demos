// Projectiles Demo

let bullets = [];
let playerX;
let playerY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  playerX = width/2;
  playerY = height/2;
}

function draw() {
  background(220);
  displayPlayer();
  handleBullets();
}

function displayPlayer() {
  fill("black");
  ellipse(playerX, playerY, 75, 75);
}

function handleBullets() {
  for (let bullet of bullets) {
    //move
    bullet.x += bullet.dx;
    bullet.y += bullet.dy;

    //display
    fill("red");
    ellipse(bullet.x, bullet.y, bullet.radius*2);
  }
}

function spawnBullet() {
  let xDiff = mouseX - playerX;
  let yDiff = mouseY - playerY;
  let xSpeed = map(xDiff, -width/2, width/2, -10, 10);
  let ySpeed = map(yDiff, -height/2, height/2, -10, 10);
  
  let bullet = {
    x: playerX,
    y: playerY,
    radius: 20,
    dx: xSpeed,
    dy: ySpeed,
  };
  bullets.push(bullet);
}

function mousePressed() {
  spawnBullet();
}