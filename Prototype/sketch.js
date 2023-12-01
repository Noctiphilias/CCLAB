star = []; //FOR STARS
let sand; //FOR SAND
let plant; //FOR FLORA
fishie = []; //FOR FISH
function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent("p5-canvas");
  for (i = 0; i < 10; i++) { //starfish
    star[i] = new starfish();
  }
  for(i = 0; i< 15; i++){ //fish
    fishie[i] = new fish();
  
  }
}

function draw() {
  background("#99baf0");
    sand = new sandy();
    sand.display();
  //let angle = map(accelerationX, -1,1,-PI,PI);
  //rotate(angle);
  for (let i = 0; i < star.length; i++) {
    star[i].star();
    star[i].update();
    star[i].checkRotation();
  }
    for (let i = 0; i < fishie.length; i++) {
    fishie[i].display();
   // fishie[i].update();
  }
  plant = new flora();
  plant.display();


}

class starfish {
  constructor(x, y, radius1, radius2, npoints) {
    this.y = random(height);
    this.x = random(width);
    this.yspeed = 0.5*sin(this.x * 0.3);
    this.xspeed = 0.5;
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
  checkRotation(){
    //this.xspeed = constrain(this.xspeed,-1,1);
    if((accelerationX) > 0){
      this.xspeed = this.xspeed-0.1;
    }
    else if((pAccelerationX) < 0){
            this.xspeed = this.xspeed+0.1;
    }else{
      this.xspeed = 0.5;
    }
    console.log(accelerationX-pAccelerationX);
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
    this.cx = random(width);
    this.cxspeed = 1;
    this.cy = random(height);
    this.cs = random(15,30); //;
    this.tx1 = this.cx;
    this.tx2 = this.cy-this.cs*0.5;
    this.ty1 = this.cx;
    this.ty2 = this.cy+this.cs*0.5;
    this.tz1 = this.cx-this.cs*0.8;
    this.tz2 = this.cy;
  }
  update(x){
    this.cx = this.cx + this.cxspeed;
    this.cy = this.cy + 1
    this.tx1 = this.tx1 + this.cxspeed;
    this.ty1 = this.ty1 + this.cxspeed;
    this.tz1 = this.tz1 + this.cxspeed;
    if(this.x < 0 || this.x > width){
    }

  }
 display(){

   fill("orange")
triangle(this.tx1,this.tx2,this.ty1, this.ty2, this.tz1, this.tz2);
   
   triangle(this.tz1+this.cs*0.5,this.tz2,this.cx-1.5*this.cs, this.tx2, this.cx-1.5*this.cs, this.ty2);

   
   circle(this.cx,this.cy,this.cs);
   
 }

}
class trash {
  display() {
    rect(random(width), random(height), 100);
  }
}

function fishy(cx,cy){
//circle
cx = 0;
cxspeed = 1;
cy = 0;
cs = 40 //size
//triangle
    tx1 = 0;
    tx2 = tx1 + 5;
    ty1 = 40
    ty2 = ty1 - 50;
    tz1 = 40;
    tz2 = tz1 - 20;
  
   fill("orange")
triangle(tx1,tx2,ty1, ty2, tz1, tz2);
   circle(cx,cy.cs)
}