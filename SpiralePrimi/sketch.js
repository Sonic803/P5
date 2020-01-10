let kk=100;
let k=1;
let w=(2*kk+1);
let h=2*kk;
let windth=w*k;
let heigth=h*k;

let A=new Array(h);
let B=new Array((h+1)*(w+1));
B[1]=false;
let i,j;
let slider;

function primi(){

  for(i=2;i<w*h+1;i++){
    B[i]=true;
  }
  for(i=2;i<w*h+1;i++){
    if(B[i]==true){
      j=i;
      while(i*j<w*h+1){
        B[i*j]=false;
        j+=1;
      }
    }
  }
}


function AAA(){

kk=slider.value();
  button.remove();
  slider.remove();
   w=(2*kk+1);
   h=2*kk;
   windth=w*k;
   heigth=h*k;

  createCanvas(windth,heigth);
  pixelDensity(5);
  primi();
  for(i=0;i<h;i++){
    A[i]=new Array(w);
  }
  let x=(w-1)/2;
  let y=h/2;
  let q=1;
  let qq=0;
  let qqq;
  i=1;
  while(y<h){
    qqq=0;
    if(qq==0){
      while(qqq<q){
        A[y][x]=i;
        x++;
        qqq++;
        i++;
      }
    }
    if(qq==1){
      while(qqq<q){
        A[y][x]=i;
        y--;
        qqq++;
        i++;
      }
      q++;
    }
    if(qq==2){
      while(qqq<q){
        A[y][x]=i;
        x--;
        qqq++;
        i++;
      }
    }
    if(qq==3){
      while(qqq<q){
        A[y][x]=i;
        y++;
        qqq++;
        i++;
      }
      q++;
    }
    qq=(qq+1)%4;
  }
  for(i=0;i<h;i++){
    for(j=0;j<w;j++){
      if(B[A[i][j]]){
          fill(0,255,100,255);
          noStroke();
          square(j*k,i*k, k);
      }else{
          fill(20,20,100,255);
       noStroke();
       square(j*k,i*k, k);
      }
    }
  }

}



function setup() {
  createCanvas(windth,heigth);
  background(100,100,100,100);

  slider=createSlider(1,1300,20,1);
  slider.position(10,10);

  button = createButton('Disegna');
  button.position(19, 100);
  button.mousePressed(AAA);



}

function draw() {

}
