//variable declaration
let x = 500;
let y = 500;
let xspeed = 2;
let yspeed = 2;
let csize = 100;
let opacity = 255;
let r = 0;
let g = 0;
let b = 0;
let easing = 0.05;
let cnv, d, v;
function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("p5-canvas");
}

function draw() {
    mousePressed()
    background(255,15);
  let targetX = mouseX;
  let dx = targetX - x;
  let targetY = mouseY;
  let dy = targetY - y;
  //declaring more variables >:(
  
  xspeed = random(-1, 1) + xspeed;
  yspeed = random(-1, 1) + yspeed;

  //defining variables
  x = x + sin(frameCount); //oscillation
  x = x + xspeed;
  y = y + sin(frameCount); //oscillation
  y = y + yspeed;
  csize = csize + 1;
  opacity = opacity - 10;

  fill(r, g, b, opacity);
  // stroke(random(255),opacity);
  noStroke();
  circle(x, y, csize);


  //if/else conditions - bounce
  // // if (mouseIsPressed) {
  //   x = mouseX + xspeed;
  //   y = mouseY + yspeed;
  // }
  if (x < 0 || x > width) {
    xspeed = x * -1;
  }
  if (y < 0 || y > height) {
    yspeed = y * -1;
  }
  //if/else conditions - control speed
  if (xspeed > 5 || xspeed > width) {
    xspeed = xspeed / 5;
  }
  if (yspeed > 5 || yspeed > height) {
    yspeed = yspeed / 5;
  }
  //properties of circle
  if (csize > 100) {
    csize = -csize;
    r = random(255);
    g = random(255);
    b = random(255);
    opacity = 255;
  }
  
  if (opacity < 0) {
    opacity = opacity + 255;
  }
  if (mouseIsPressed){
      x += dx * easing;
      y += dy * easing;
      csize = csize + 80
  }

  //console.log(x + " " + y)

}
function mousePressed(){
  fill(0)
}