// CCLab Mini Project - 9.R Particles Template

let NUM_OF_PARTICLES = 200; // Decide the initial number of particles.
let value = 0;
let particles = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("mycontainer");
createCanvas(600, 600);


  // generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  background(50);
console.log(value)

  // update and display
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }
}



class Particle {
  // constructor function
  constructor(startX, startY) {
    // properties: particle's characteristics
    this.x = startX;
    this.xspeed = random(1,4);
    this.y = startY;
        this.yspeed = random(1,4);

    this.dia = random(10,30);
    this.r = random(0,255);
    this.g = random(0,75)
    this.b = 0;
    this.cc = 255;
    this.opa = random(0,255)
    this.value = value
    this.cs = 5;
    this.cx = 0;
    this.cy = 0;


  }
  // methods (functions): particle's behaviors
  update() {
    // (add) 
    this.x = this.x + this.xspeed
    if(this.x > width){this.x = -this.xspeed}
    this.y = this.y + this.yspeed
        if(this.y > height){this.y = -this.yspeed}
    this.cx = this.cx + this.xspeed
    if(this.cx > width){this.cx = -this.xspeed}

    this.cy = this.cy + this.yspeed
        if(this.cy > height){this.cy = -this.yspeed}


  }
  display() {
    // particle's appearance
    push();
    translate(this.x, this.y);
    noStroke();
    fill(this.r, this.g, this.b, this.opa);
    stroke(this.r, this.g, this.b)
    strokeWeight(2)
    line(0,0,30,15)
    pop();
    push()
    noStroke();
    translate(0,0)
    fill(this.cc, this.cc, this.cc, this.opa)
    circle(this.cx,this.cy,this.cs)
    pop()
    

  }
}
