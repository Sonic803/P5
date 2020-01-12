function Particle(x,y,r){
  var options = {
      friction:0,
      restitution:0.3
  }

  this.body = Bodies.circle(x,y,r,options);
  this.r = r;
  World.add(world, this.body);
  this.red=random(0,255);
  this.green=random(0,255);
  this.blue=random(0,255);
}


Particle.prototype.show = function(){
  fill(this.red,this.green,this.blue);
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  ellipse(0 , 0, this.r *2);
  pop();
}
