
let windth=1000;
let height=1000;


var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var particles=[];
var  plinko=[];
var hi=100;
var wi;
var h=100;
var w=30;
function createplinko(){
  for(let i=100;i<height-hi;i+=h){
    for(let j=(i%(2*h))/2;j<windth;j+=h){
      var p = new Plinko(j,i,20);
      plinko.push(p);
    }
  }
}




function setup() {
  createCanvas(windth,height);
  background(100,100,100,255);
  engine=Engine.create();
  world =engine.world;
  createplinko();


}

function draw() {
  if(frameCount%5==1){
    var p = new Particle(windth/2+random(-10,10),0,5);
    particles.push(p);
  }
  background(100);
  Engine.update(engine);
  for(let i =0;i<particles.length;i++){
      if(particles[i].body.position.y>height){
        particles.splice(i,1);
      }
      particles[i].show();
  }
  for(let i =0;i<plinko.length;i++){
      plinko[i].show();
  }

}
