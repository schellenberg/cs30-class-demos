// Aquarium

let fish;
let octopus;
let clownfishImg;
let octopusImg;

function preload() {
  clownfishImg = loadImage("assets/clownfish.png");
  octopusImg = loadImage("assets/octopus.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  octopus = new Octopus(100, 200, 100, octopusImg);
  fish = new Clownfish(random(width), random(100, height-100), 30, clownfishImg);
}

function draw() {
  background(220);
  octopus.update();
  octopus.display();
  fish.update();
  fish.display();
}

class Creature {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  update() {
    this.x += 4;
  }

  display() {
    fill("green");
    circle(this.x, this.y, this.size);
  }
}

class Clownfish extends Creature {
  constructor(x, y, size, theImage) {
    super(x, y, size);
    this.myImage = theImage;
    this.yTime = 1000;
    this.speed = random(1, 2);
  }

  update() {
    //Logan's movement
    // this.x += 2;
    // this.y = noise(this.yTime)*height;
    // this.yTime += random(0.001, 0.005);

    //Declan's Movement
    // this.x += this.speed;
    // this.y += sin(this.x / 100);

    //Daniel's Movement
    this.x += random(0.1, 3);
    this.y = noise(this.x/300, second()/600) * height;

    // //teleport from right to left
    if (this.x > width) {
      this.x = 0;
    }
  }

  display() {
    image(this.myImage, this.x, this.y, this.size, this.size);
  }
}

class Octopus extends Creature {
  constructor(x, y, size, someImage) {
    super(x, y, size);
    this.image = someImage;
  }

  display() {
    image(this.image, this.x, this.y, this.size, this.size);
  }
}