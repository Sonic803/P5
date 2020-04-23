
let Windth=300;
let Length=300;

let x;
let y;
let xa=1;
let ya=0;
let xx=0;
let yy=0;
let k=4;
let maxit=50;
let brig;
let f;
let c;
let pix;
let i,j;
function itera(a,b){
  c=0;
    while((c<maxit)&&(a*a+b*b<4)){
      f=a;
      a=a*a-b*b+xa;
      b=ya+2*f*b;
      c++;
    }
    brig=map(c,0,maxit,0,255);
    pix=(i+j*Windth)*4;
    pixels[pix + 0] = brig*brig/9;
    pixels[pix + 1] =  brig;
    pixels[pix + 2] = brig;
    pixels[pix + 3] = 255;
    return;


}

function crist (){

loadPixels();
  xa=map(mouseX,0,Windth,-2,2);
  ya=map(mouseY,Length,0,-2,2);
  for(i=0;i<Windth;i++){
    for (j=0;j<Length;j++){
        x=map(i,0,Windth,-2,2);
        y=map(j,0,Length,-2,2);
        itera(x,y);
    }
  }
  updatePixels();
  return;
}


function setup() {
  createCanvas(Windth,Length);
  pixelDensity(1);
  frameRate(45);



}

function draw() {
  crist();
}
