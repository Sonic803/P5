
let Windth=1000;
let Length=1000;

let x;
let y;
let xx=0;
let yy=0;
let k=4;
let maxit=100;
let A=Array(maxit);
function   itera(a,b,c){
    if(c==maxit-1){
      return c;
    }
    if(sqrt(a*a+b*b)>2){
      return c;
    }
    let f=a;
    a=a*a-b*b+x;
    b=y+2*f*b;
    return itera(a,b,c+1);


}

function crist (){
    pixelDensity(5);
  createCanvas(Windth,Length);
  A[0]=color(255,0,0,255);
  A[1]=color(127,127,0,255);
  A[2]=color(0,255,0,255);
  A[3]=color(0,127,127,255);
  A[4]=color(0,0,255,255);
  A[5]=color(127,0,127,255);
  for(let i=0;i<maxit-1;i++){
    A[i]=A[i%6];
  }
  A[maxit-1]=color(0,0,0,255);

  for(let i=0;i<Windth;i++){
    for(let j=0;j<Length;j++){
        x=-2+xx/Windth*4+(i/Windth*k);
        y=-2+yy/Length*4+(j/Length*k);
          stroke(A[itera(x,y,0)]);
          strokeWeight(1);
          point(i, j);

    }
  }
  return;
}


function setup() {
crist();


}

function draw() {

}
