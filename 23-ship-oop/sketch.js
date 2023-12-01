// OOP Ship
// Dan Schellenberg

// ------------------------------------------------------------------------- //
// You don't need to edit this section...

let enterprise;
let shipImage, bulletImage;

function preload() {
  shipImage = loadImage("assets/enterprise.png");
  bulletImage = loadImage("assets/laser-shot.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  enterprise = new Ship(width/2, height/2, shipImage);
}

function draw() {
  background("black");
  enterprise.update();
  enterprise.display();
}

function keyPressed() {
  enterprise.handleKeyPress();
}

// ------------------------------------------------------------------------- //
// Start editing here!

class Ship {
  constructor(x, y, theImage) {
    this.x = x;
    this.y = y;
    this.theImage = theImage;
    this.speed = 5;
    this.bulletArray = [];
  }

  update() {
    // move ship -- you might want to use the keyIsDown() function here

    if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) { //a - left
      this.x -= this.speed;
    } 

    if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) { //d - right
      this.x += this.speed;
    } 

    if (keyIsDown(87) || keyIsDown(UP_ARROW)) { //w - up
      this.y -= this.speed;
    } 

    if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) { //s - down
      this.y += this.speed;
    } 

    // if doing extra for experts, show bullet(s)
    for (let i = this.bulletArray.length-1; i >= 0; i--) {
      let bullet = this.bulletArray[i];
      if (bullet.isOnScreen()) {
        bullet.update();
      }
      else {
        this.bulletArray.splice(i, 1);
      }
    }
  }

  display() {
    imageMode(CENTER);
    
    for (let bullet of this.bulletArray) {
      bullet.display();
    }
    
    // show the ship
    image(this.theImage, this.x, this.y);
  }

  handleKeyPress() {
    // you only need to use this if you are doing the extra for experts...
    // if you are, you should make a bullet if the space key was pressed
    if (key === " ") {
      let someBullet = new Bullet(this.x, this.y, 0, -5, bulletImage);
      this.bulletArray.push(someBullet);
    }
  }
}

// ------------------------------------------------------------------------- //

// Extra for Experts 
//  - you can instantiate a bullet (or a bullet array) within the Ship class,
//    and call the display and update functions in the logical location of the 
//    Ship class. If you create an array of bullets, you might want to think about
//    when the bullets should be removed from the array...

class Bullet {
  constructor(x, y, dx, dy, theImage) {
    // define the variables needed for the bullet here
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.theImage = theImage;
  }

  update() {
    // what does the bullet need to do during each frame? how do we know if it is off screen?
    this.x += this.dx;
    this.y += this.dy;
  }

  display() {
    // show the bullet
    image(this.theImage, this.x, this.y);
  }

  isOnScreen() {
    // check if the bullet is still on the screen
    return this.y >= 0;
  }
}

