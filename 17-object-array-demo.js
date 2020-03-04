let ballArray = [];


function setup() {
  createCanvas(400, 400);
  noStroke();
  
  for (let i=0; i<100; i++) {
    let ball = {
      dx: random(-5, 5), 
      dy: random(-5, 5),
      radius: 10,
      x: random(width), 
      y: random(height),
      fillColor: color(random(255), random(255), random(255), random(255)),
    };
    ballArray.push(ball);
  }
}

function draw() {
  background("black");
  
  for (let i=0; i<ballArray.length; i++) {
    let ball = ballArray[i];
    
    //other option is for (let ball in ballArray)
    
    //move ball 
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.x - ball.radius <= 0 || ball.x + ball.radius >= width) {
      ball.dx *= -1;
    }
    if (ball.y - ball.radius <= 0 || ball.y + ball.radius >= height) {
      ball.dy *= -1;
    }


    //display ball
    fill(ball.fillColor);
    ellipse(ball.x, ball.y, ball.radius*2, ball.radius*2);
  }
}
