// Timer demo

let blinkTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  blinkTime = new Timer(1000);
}

function draw() {
  if (blinkTime.isDone()) {
    background("red");
    blinkTime.setWaitTime(2000);
    blinkTime.reset();
  }
  else {
    background("white");
  }
  blinkTime.display(100, 200, 60);
}

class Timer {
  constructor(howLongToWait) {
    this.howLongToWait = howLongToWait;
    this.beginTime = millis();
    this.endTime = this.beginTime + this.howLongToWait;
  }

  isDone() {
    return millis() >= this.endTime;
  }

  reset() {
    this.beginTime = millis();
    this.endTime = this.beginTime + this.howLongToWait;
  }

  setWaitTime(howLongToWait) {
    this.howLongToWait = howLongToWait;
  }

  display(x, y, size) {
    let remainingSeconds = round((this.endTime - millis())/100) / 10;
    textSize(size);
    text(remainingSeconds, x, y);
  }
}