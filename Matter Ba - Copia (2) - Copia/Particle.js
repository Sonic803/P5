function Particle(x,y,w,h,dens){
  var options = {
      friction:0,
      frictionAir:0.0,
      frictionStatic:0.0,
      restitution:1,
      collisionFilter:0,
      density:dens
  }
  this.w=w;
  this.h=h;

  this.body = Bodies.rectangle(x,y,w,h,options);
//  this.body.inertia=k;
//  this.body.inverseInertia=1/k;
  World.add(world, this.body);
  this.red=random(0,255);
  this.green=random(0,255);
  this.blue=random(0,255);
}


Particle.prototype.show = function(){
  let pos = this.body.position;
      let angle = this.body.angle;

      push();
  						translate(pos.x, pos.y);

              stroke(0,0,0,100);
              strokeWeight(5);
              line(0,0,this.body.velocity.x*3,this.body.velocity.y*3)

      rotate(angle);
      rectMode(CENTER);


      strokeWeight(4);
      stroke(this.red,this.green,this.blue,100);
      fill(this.green,this.blue,this.red,100);

      rect(0, 0, this.w, this.h);


  line(0,0,0,this.h/2);


  pop()

    velx=abs(this.body.velocity.x);
    vely=abs(this.body.velocity.y);
  	pointss.push(new Pointt(pos.x,pos.y,angle,this.h,velx,vely))
}
