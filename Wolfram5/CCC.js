let r=[0,1];


class punto{
  constructor(a,k,xoa,yoa){
    this.x=xoa;
    this.y=yoa;
    this.kk=k;
    this.v=a;
  }
  show(){
   if(this.v==1){
     noStroke();
     let c=random(0,255);
     fill(color(0,0,0,255));
      square(this.x*kk, this.y*kk, this.kk);
   }
  }
}
