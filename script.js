let bird;
let pipes = [];

function setup() {
  createCanvas(400, 400);
  bird = new Bird();
  pipes.push(new Pipe());
}
function draw() {
  background(0,225,255);  
  bird.Gravity();
  bird.show();
  for (var i = pipes.length-1; i >= 0; i--){
    pipes[i].show();
    pipes[i].Gravity();
    if (pipes[i].hits(bird)) {
      clear();
      noLoop();
    }
    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }
  if (frameCount % 100 == 0) {
    pipes.push(new Pipe());
  }
}
function keyPressed() {
  if (key == ' ') {
    bird.up();
  }
}
