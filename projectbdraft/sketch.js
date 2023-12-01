star = [];
let sand;
let plant;
fishie = []; //will change into a forloop
function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("p5-canvas");
  for (i = 0; i < 10; i++) {
    star[i] = new starfish();
    sand = new sandy();
  }
  for(i = 0; i< 15; i++){
    fishie[i] = new fish();
  
  }
}

function draw() {
  background("#99baf0");
  sand.display();
  for (let i = 0; i < star.length; i++) {
    star[i].star();
    star[i].update();
  }
    for (let i = 0; i < fishie.length; i++) {
    fishie[i].display();
    fishie[i].update();
  }
  plant = new flora();
  plant.display();
}

class starfish {
  constructor(x, y, radius1, radius2, npoints) {
    this.y = random(height);
    this.x = random(width);
    this.yspeed = sin(this.x * 0.3);
    this.xspeed = 5;
    this.npoints = 5;
    this.radius1 = 10;
    this.radius2 = 15;
    this.angle = TWO_PI / this.npoints;
    this.halfangle = this.angle / 2.0;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }
  update(x, y) {
    this.y = this.y + this.yspeed;
    if (this.y < 0 || this.y > 400) {
      this.yspeed = -this.yspeed;
    }
    this.x = this.x + this.xspeed;
    if (this.x < 0 || this.x > width) {
      this.x = -this.xspeed;
    }
  }
  display() {}
  star(x, y, radius1, radius2, npoints) {
    fill(this.r, this.g, this.b);
    noStroke();
    push();
    beginShape();
    for (this.a = 0; this.a < TWO_PI; this.a += this.angle) {
      this.sx = this.x + cos(this.a) * this.radius2;
      this.sy = this.y + sin(this.a) * this.radius2;
      vertex(this.sx, this.sy);
      this.sx = this.x + cos(this.a + this.halfangle) * this.radius1;
      this.sy = this.y + sin(this.a + this.halfangle) * this.radius1;
      vertex(this.sx, this.sy);
    }
    endShape(CLOSE);
    pop();
  }
}
class sandy {
  constructor(x, y) {
    this.x = 200;
    this.y = 600;
  }
  display() {
    fill("#e6d783");
    push();
    translate(this.x, this.y);
    circle(0, 0, 600);
    circle(-200, -200, 100);
    circle(-160, -250, 60);
    circle(-140, -250, 70);
    circle(200, -200, 110);
    circle(160, -250, 60);
    circle(140, -250, 70);

    pop();
  }
}
class flora {
  constructor() {
    this.recty = random(10,200)
  }
  update() {}
  display() {
        push();
    translate(200,275)
    fill("#2b523a")
    rect(-150,5,10,90)
    rect(-10,-30,5,100)
    rect(34,-60,10,150)
    rect(-60,-50,10,120)
    rect(60,-50,10,120)
    rect(-100,0,10,100)
    rect(100,5,10,90)
        pop();
  }
}
class fish {
  constructor(x){
    this.x = 0;
    this.cxspeed = 1;
    this.cy = 0;
    this.cs = 40 //size
    this.tx1 = 0;
    this.tx2 = 5;
    this.ty1 = 40;
    this.ty2 = -10;
    this.tz1 = 40;
    this.tz2 = 20;



  }
  update(x){
    this.x = this.x + this.cxspeed;
    this.tx1 = this.tx1 + this.cxspeed;
    this.ty1 = this.ty1 + this.cxspeed;
    this.tz1 = this.tz1 + this.cxspeed;
    if(this.x < 0 || this.x > width){
      this.cxspeed = -this.cxspeed;
    }

  }
 display(){
   push()
   fill("orange")
triangle(this.tx1,this.tx2,this.ty1, this.ty2, this.tz1, this.tz2);
   circle(this.x,this.cy,this.cs)
      fill("red")
      circle(0,0,5)

   pop()
 }

}
class trash {
  display() {
    rect(random(width), random(height), 100);
  }
}