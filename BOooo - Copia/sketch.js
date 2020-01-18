var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Constraint = Matter.Constraint,
    Body = Matter.Body,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

var windth=2000
var heigth=2000
var muri=[]
var cec=[]
var cerc
var cerc2
var cons
var mcons
var mousee
var ll=1000


function cursore(a){
  a.body.position.x=mouseX;
  a.body.position.y=mouseY;
}



var a

function setup() {

  engine=Engine.create();

  world =engine.world;
  engine.constraintIterations=30;
  engine.velocityIterations=30;
  engine.positionIterations=30;

  var canvas=createCanvas(windth,heigth);
  canvas.pixelRatio= pixelDensity()


//  mousee = Mouse.create(canvas.elt)
//  mcons=MouseConstraint.create(engine,{mouse: mousee})
//  World.add(world,mcons)

  var p=new Rectangle(windth/2,-ll/2-2,windth,ll,1)
  muri.push(p)
  var p=new Rectangle(windth/2,heigth+ll/2+2,windth,ll,1)
  muri.push(p)
  var p=new Rectangle(-ll/2-2,heigth/2,ll,heigth,1)
  muri.push(p)
  var p=new Rectangle(windth+ll/2+2,heigth/2,ll,heigth,1)
  muri.push(p)

  cerc=new Circle(windth/2,heigth/2,10,1,true)
  //cerc2=new Circle(windth/2,heigth/2,50,1,false)
  cec.push(cerc)
  //cec.push(cerc2)

  for(i=1;i<4000;i++){
      var p=new Circle(random(0,windth),random(0,heigth),random(1,1),1,false);
      cec.push(p)
      //Attraggi(cec[i],cec[i-1],500)
  }


  frameRate(60)

  world.gravity.scale =0;

  textSize(100)
  pixelDensity(4)
  background(00,00,00,255);
}

function draw() {


  background(100,0)

  Engine.update(engine);
//  cursore(cerc2);
  for(let i=0;i<muri.length;i++){
    muri[i].show()
  }
  for(let i=0;i<cec.length;i++){
        Attraggi(cec[i],cec[0],50)
  }
  for(let i=1;i<cec.length;i++){
    cec[i].show()
  }


    if(frameCount%60==1){
      console.log(frameRate())
    }
  //  text(a, windth-150, 100);


}
