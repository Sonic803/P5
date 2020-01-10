
let rule=30;
let w=1921;
let h=((w-3)/2);
let kk=1;
let windth=w*kk;
let heigth=h*kk;


let i;
let j;
let sa=true;
let A=new Array(h);
let B=new Array(h);
let ddd;
let ccc=0;

function aaa(){

  rule=this.value();
  if(ccc.value!=(this.value)){
    console.log(ccc.value)
    ddd=false;
  }
  if(sa){
    console.log("macome")
    ccc=(this.value);
    sa=false;
  }
}

let s;
function setup() {
s = createInput(30);
frameRate(60);
s.input(aaa);
}
let bbb=10;
function draw() {
bbb=ccc;

if(ddd){
  return;
}else{
  ddd=true;
}
console.log("ciao")
  for(i=0;i<8;i++){
    B[i]=false;
  }
  pixelDensity(5);
  createCanvas(windth,heigth);
  background(120,12,120,100);
  let ru=rule;
  let l=0;
  while(ru>0){
    if(ru%2==1){
      B[l]=true;
      ru--;
    }
    ru/=2;
    l++;
  }
  for(i=0;i<h;i++){
    A[i]= new Array(w);
    for(j=0;j<w;j++){
        A[i][j]=new punto(0,kk,j,i);
    }
  }

  A[0][(w-1)/2].v=1;
  j=0;
  let xx=w;
  let xxx=0;
  let conta=0;
  i=0;
  while(i<h-1){
    conta=4*(A[i][xxx].v)+2*(A[i][xxx+1].v)+(A[i][xxx+2].v);
    j=xxx+2;
    while(j<xx-1){
      if(B[conta]){
        A[i+1][j-1].v=1;
      }
      conta=conta*2;
      conta-=8*(A[i][j-2].v);
      conta+=A[i][j+1].v;
      j++;
    }
    i++;
  }
  for(i=0;i<h;i++){
    for(j=0;j<w;j++){
      A[i][j].show();
    }
  }




}
