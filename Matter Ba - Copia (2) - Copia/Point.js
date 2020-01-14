

function Pointt(xx,yy,angle,h,velx,vely){
  this.x=xx;
  this.y=yy;
  this.angle=angle;
  this.h=h;
    this.vel=velx+vely;

 }


 Pointt.prototype.show=function(){

      push();
  						translate(this.x, this.y);

      rotate(this.angle);
      rectMode(CENTER);


      strokeWeight(5);
      stroke(this.vel*15);
      fill(127);
      point(0,this.h/2);

    pop();
  }
