// Scope Demo

//global variable
let number = 80;

function setup() {
  createCanvas(700, 400);
  background("black");
  stroke("white");
  noLoop();
}

function draw() {
  number = 50;
  line(number, 0, number, height);

  for (let number = 120; number < 200; number += 2) {
    line(number, 0, number, height);
    // console.log(number);
  }
  
  drawAnotherLine();
  drawYetAnotherLine();
}

function drawAnotherLine() {
  let number = 320;
  line(number, 0, number, height);
}

function drawYetAnotherLine() {
  line(number + 5, 0, number + 5, height);
}