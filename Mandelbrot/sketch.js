
let Windth=200;
let Length=200;

let x;
let y;
let xx=0;
let yy=0;
let k=4;
let maxit=100;
let A=Array(maxit);
function   itera(a,b,c){
    if(c>maxit-2){
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

  createCanvas(Windth,Length);

  for(let i=0;i<maxit;i++){
    A[i]=color(random(0,255),random(0,255),random(0,255),255);
  }
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
