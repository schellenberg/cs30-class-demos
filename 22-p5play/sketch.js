// p5.play demo

let ball, floor;

function setup() {
  new Canvas(80, 256);
  world.gravity.y = 10;
  ball = new Sprite(40, 30, 50);
  floor = new Sprite(40, 155, 80, 5, "s");
}

function draw() {
  clear();
  if (frameCount === 100)	{
    ball.sleeping = false;
    floor.rotation = 10;
  }
}