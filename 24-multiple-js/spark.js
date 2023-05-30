class Spark {
  constructor(x, y, dx, dy, r, g, b) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.g = g;
    this.b = b;
    this.alpha = 255;
    this.size = 5;
    this.gravity = 0.05;
  }
  
  display() {
    noStroke();
    fill(this.r, this.g, this.b, this.alpha);
    circle(this.x, this.y, this.size);
  }
  
  update() {
    this.x += this.dx;
    this.y += this.dy;
  
    this.alpha--; //fade away
    this.dy += this.gravity;
  }
  
  isDead() {
    return this.alpha <= 0;
  }
}