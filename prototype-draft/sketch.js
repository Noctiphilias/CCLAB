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
  for(i = 0; i< 10; i++){ //fish
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
    fishie[i].update();
    fishie[i].changedirection();
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
    if (this.y < 0 || this.y > height) {
      this.y = -this.yspeed;
    }
    this.x = this.x + this.xspeed;
    if (this.x < 0 + this.radius2) {
      this.x = 0 + this.radius2;
    }
    if (this.x > width - this.radius2) {
      this.x = width-this.radius2;
      this.xspeed = -this.xspeed;
    }
        if (this.y > height - this.radius2) {
      this.y = height-this.radius2;
      this.yspeed = -this.yspeed;
    }
    
  }
  checkRotation(){
    //this.xspeed = constrain(this.xspeed,-1,1);
    if((rotationY) > 10){
      this.xspeed = this.xspeed+0.1;
    }
    else if((rotationY) < -10){
            this.xspeed = this.xspeed-0.1;
    }else{
      this.xspeed = 0.5;
          if((rotationZ) > 10){
      this.xspeed = this.xspeed+0.1;
    }
    else if((rotationZ) < 10){
            this.xspeed = this.yspeed-0.1;
    }else{
      this.yspeed = 0.5;}
    }
    //     if((accelerationY) > 0){
    //   this.yspeed = this.yspeed-0.1;
    // }
    // else if((pAccelerationY) < 0){
    //         this.yspeed = this.yspeed+0.1;
    // }else{
    //   this.yspeed = 0.5;
    // }
    console.log(rotationX);
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
  constructor(){
    this.cx = random(30, width-30);
    this.cxspeed = 1;
    this.cy = random(100, height-100);
    this.cs = random(15,30); //;
    this.r = random(255)
    this.g = random(255)
    this.b = random(255)
    this.freq = random(0.01, 0.05);
    this.time = int(random(200));
    this.flip = 1;
  }
  update(){
    this.cx = this.cx + this.cxspeed;
    this.cy = this.cy + 0.7*sin(frameCount*this.freq);
   
  }
 display(){
   push();
   translate(this.cx,this.cy);
   scale(this.flip,1);
   fill(this.r, this.g, this.b)
triangle(-this.cs*0.1,-this.cs*0.5,-this.cs*0.1, this.cs*0.5, -this.cs*0.8, 0);
   triangle(-this.cs*0.8, 0,-this.cs*1.5,-this.cs*0.5, -this.cs*1.5, this.cs*0.5);
   circle(0,0,this.cs);
   pop();
   
 }
  changedirection( ){
    if(frameCount%300 == this.time || this.cx > width-this.cs || this.cx < 0 + this.cs){
      this.cxspeed = -this.cxspeed;
      this.flip = -this.flip;
    }
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