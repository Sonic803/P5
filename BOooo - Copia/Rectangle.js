function Rectangle(x,y,w,h,dens){

  var options = {
      friction:0,
      frictionAir:0,
      frictionStatic:0,
      restitution:1,
    //  collisionFilter:0,
      isStatic:true,
      density:dens
  }

  this.w=w;
  this.h=h;

  this.body = Bodies.rectangle(x,y,w,h,options);
  //    this.body.inertia=k;
  //    this.body.inverseInertia=1/k;
  World.add(world, this.body);
  this.red=random(0,255);
  this.green=random(0,255);
  this.blue=random(0,255);
  this.red1=random(0,255);
  this.green1=random(0,255);
  this.blue1=random(0,255);

}

Rectangle.prototype.show = function(){

  let pos = this.body.position;
  let angle = this.body.angle;

  push();
    //    stroke(0,0,0,100);
    //    strokeWeight(5);
    //    var ap=this.body.velocity.x*this.body.velocity.x+this.body.velocity.y*this.body.velocity.y;
    //    ap=sqrt(ap)
    //    line(0,0,this.body.velocity.x/ap*this.w/2,this.body.velocity.y/ap*this.w/2)
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(1);
    stroke(this.red,this.green,this.blue,255);
    fill(this.red1,this.green1,this.blue1,255);
    rect(0, 0, this.w, this.h);
    line(0,0,0,this.h/2);
  pop()

  //    velx=abs(this.body.velocity.x);
  //    vely=abs(this.body.velocity.y);
  //    pointss.push(new Pointt(pos.x,pos.y,angle,this.h,velx,vely))

}



Rectangle.prototype.force = function(fx,fy){

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
