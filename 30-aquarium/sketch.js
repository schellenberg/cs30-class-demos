// Aquarium

let theCreatures = [];
let clownfishImg;
let octopusImg;

function preload() {
  clownfishImg = loadImage("assets/clownfish.png");
  octopusImg = loadImage("assets/octopus.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<50; i++) {
    if (random(100) < 30) {
      let octopus = new Octopus(random(width), random(height), 100, octopusImg);
      theCreatures.push(octopus);
    }
    else {
      let fish = new Clownfish(random(width), random(100, height-100), 30, clownfishImg);
      theCreatures.push(fish);
    }
  }
}

function draw() {
  background(220);
  for (let someCreature of theCreatures) {
    someCreature.update();
    someCreature.display();
  }
}

class Creature {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  update() {
    //Declan's Movement
    this.x += 2;
    this.y += sin(this.x / 100);

    // //teleport from right to left
    if (this.x > width) {
      this.x = 0;
    }
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