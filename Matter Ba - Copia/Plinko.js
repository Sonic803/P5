function Plinko(x,y,r){
var options = {
  isStatic: true
}

  this.body = Bodies.circle(x,y,r,options);
  this.r = r;
  World.add(world, this.body);
//  this.red=random(0,255);
//  this.green=random(0,255);
//  this.blue=random(0,255);
}


Plinko.prototype.show = function(){
  fill(255);
  var pos = this.body.position;
  push();
  translate(pos.x, pos.y);
  ellipse(0 , 0, this.r *2);
  pop();
}
