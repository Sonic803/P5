
let r=[0,1];

let ss=[-10,20];
let s=[-10,10];
class punto{
  constructor(a,k){
    this.x=0;
    this.y=0;
    this.now=a;
    this.pri=a;
    this.kk=k;
    this.r=random(r)*255;
    this.g=random(r)*255;
    this.b=random(r)*255;
    this.c=color(this.r,this.g,this.b,255);
  }
  show(){
   if(this.now){
     this.c=color(this.r,this.g,this.b,255);
       fill(this.c);
       noStroke();
      square(this.x, this.y, this.kk);
   }
  }
}


function update(x,y,A,xx,yy){
  let red=0,green=0,blue=0;
  let c=0;
  for(let i=x-1;i<x+2;i++){
    for(let j=y-1;j<y+2;j++){
      if(i>=0&&j>=0&&i<xx&&j<yy&&A[i][j].pri&&(i!=x||j!=y)){
        c++;
        red+=A[i][j].r;
        green+=A[i][j].g;
        blue+=A[i][j].b;
      }
    }
  }
            if(A[x][y].now){
        if(c!=2&&c!=3){
          A[x][y].pri=true;
          A[x][y].now=false;
        }
      }else{
        if(c==3){
          A[x][y].r=red/3;
          A[x][y].g=green/3;
          A[x][y].b=blue/3;
          A[x][y].pri=false;
          A[x][y].now=true;


  }
}
}
