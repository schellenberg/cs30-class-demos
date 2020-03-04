let ball = {
  x: 100, 
  y: 200,
  radius: 75,
  fillColor: "blue",
};


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //move ball to mouse
  ball.x = mouseX;
  ball.y = mouseY;
  
  //display ball
  fill(ball.fillColor);
  ellipse(ball.x, ball.y, ball.radius*2, ball.radius*2);
}
