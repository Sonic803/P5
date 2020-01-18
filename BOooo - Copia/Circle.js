function Circle(x,y,r,dens,sta){

  var options = {
    friction:0,
    frictionAir:0,
    frictionStatic:0.0,
    restitution:0.8,
    //collisionFilter:0,
    isStatic:sta,
    density:dens

  }
  this.body = Bodies.polygon(x,y,100,r,options);
  this.r = r;
  World.add(world, this.body);
  this.red=random(0,255);
  this.green=random(0,255);
  this.blue=random(0,255);
  this.red1=random(0,255);
  this.green1=random(0,255);
  this.blue1=random(0,255);

}

Circle.prototype.show = function(){

  let pos = this.body.position;
  let angle = this.body.angle;

  push()
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(this.red,this.green,this.blue,100);
    fill(this.red1,this.green1,this.blue1,100);
    //ellipse(0 , 0, this.r *2);
    point(0, 0);
    //line(0,0,0,this.r);
  pop()

}

Circle.prototype.force = function(fx,fy){

  var posi = {
    x:this.body.position.x,
    y:this.body.position.y
  }

  var forc = {
    x:fx,
    y:fy
  }

  Body.applyForce(this.body,posi,forc)

}
