var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
    Constraint = Matter.Constraint;

var particles=[]
var constraints=[]
var pointss=[]

var windth=1080;
var heigth=1080;
var hhh=20;
var w1=50
var h1=200
var w2=50
var h2=200
var len=1
var stiff=1
var angstiff=0.7

var body;

function cursore(){
  var options = {
    isStatic: true,
    friction:0,
    frictionAir:0.0,
    frictionStatic:0.0,
    restitution:1,
        collisionFilter:0
  }
  body.position.x=mouseX;
  body.position.y=mouseY;
}

function collega(A,B,lunghe,AA,BB){
  var options = {
    bodyA: A,
    bodyB: B,
    length:lunghe,
    stiffness:stiff,
    angularStiffness:angstiff,
    pointA:AA,
    pointB:BB,
    damping:0
  }
  var constraint=Constraint.create(options);
  constraints.push(constraint)
    World.add(world,constraint);
    console.log(constraint)

}

function setup() {
  engine=Engine.create();
  world =engine.world;

  createCanvas(windth,heigth);
  background(20,100,20,255);

  var p = new Particle(windth/2,0,w1,h1,0.001);
  particles.push(p);
  var p = new Particle(windth/2,0,w2,h2,0.001);
  particles.push(p)
//  var p = new Particle(windth/2,0,w2,h2,1);
//  particles.push(p)

  var options = {
    isStatic: true
  }
  body=Bodies.circle(0,0,3,options);
  World.add(world, body);


  collega(particles[0].body,body,len,{x:0,y:-h1/2+hhh},{x:0,y:0})
  collega(particles[0].body,particles[1].body,len,{x:0,y:h1/2-hhh},{x:0,y:-h1/2+hhh})
//  collega(particles[1].body,particles[2].body,len,{x:0,y:h2/2-hhh},{x:0,y:-h2/2+hhh})


  world.gravity.scale = 0.002;

frameRate(60)
    console.log(engine)

}
var xx1;
var yy1;

var xx2;
var yy2;
function draw() {
  cursore();

  //  if(frameCount%30==1){
  //    var p = new Particle(windth/2,0,35);
  //    particles.push(p);
  //  }
  background(100);
  Engine.update(engine);

  for(let i =0;i<particles.length;i++){
      particles[i].show(i);

  }
  for(let i =0;i<constraints.length;i++){
    xx1=constraints[i].bodyA.position.x+constraints[i].pointA.x;
    yy1=constraints[i].bodyA.position.y+constraints[i].pointA.y;
    xx2=constraints[i].bodyB.position.x+constraints[i].pointB.x;
    yy2=constraints[i].bodyB.position.y+constraints[i].pointB.y;

        line(xx1,yy1,xx2,yy2)

  }

  for(let i=0;i<pointss.length;i++){
    if(i>200){
      pointss.splice(0,1);
      i--;
    }
    		pointss[i].show();
     }


}
