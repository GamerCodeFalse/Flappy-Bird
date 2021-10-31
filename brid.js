class Bird {
  constructor(){
    this.y = height/2;
    this.x = 64;

    this.gravity = 1;
    this.lift = -12;
    this.velocity = 0;
  }

  show() {
    fill(255,255,0);
    noStroke();
    rect(this.x, this.y, 30, 30);
  }

  up() {
    this.velocity += this.lift;
  }

  Gravity() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > height-30) {
      this.y = height-30;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }

  }

}