// Bubble OOP Demo

class Bubble {
  constructor(x, y, dy) {
    this.x = x;
    this.y = y;
    this.dy = dy;
    this.radius = random(25, 100);
    this.color = color(random(255), random(255), random(255), random(255));
    this.timer = new Timer(1000);
  }

  display() {
    noStroke();
    if (!this.timer.isDone()) {
      fill(this.color);
      ellipse(this.x, this.y, this.radius*2, this.radius*2);
    } 
  }

  bubbleUp() {
    if (this.y >= this.radius) {
      this.y += this.dy;

      //wind factor
      if (random(100) < 40) {
        this.x += random(-5, 5);
      }
    }
    else {
      if (!this.timer.hasRun) {
        this.timer.restart();
      }
    }

    
  }
}

class Timer {
  constructor(timeToWait) {
    this.timeToWait = timeToWait;
    this.hasRun = false;
  }

  isDone() {
    return millis() >= this.endTime;
  }

  restart() {
    this.startTime = millis();
    this.endTime = this.startTime + this.timeToWait;
    this.hasRun = true;
  }
}

let theBubbles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<100; i++) {
    let myBubble = new Bubble(random(width), height + 100, random(-5, -1));
    theBubbles.push(myBubble);
  }
}

function draw() {
  background(0);

  for (let i = 0; i < theBubbles.length; i++) {
    theBubbles[i].bubbleUp();
    theBubbles[i].display();
  }
  
}
