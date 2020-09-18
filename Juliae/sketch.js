// a shader variable
let theShader;

function preload(){
  // load the shader
  theShader = loadShader('basic.vert', 'basic.frag');
}
var adf=3
function setup() {
  // shaders require WEBGL mode to work
  createCanvas(1080,  1080, WEBGL);
  pixelDensity(adf);

  frameRate(60)
  noStroke();
  //windowResized()
}
var af=0
var aff=1000

function change(ad){
  af=ad;
}
function cnah(asd){
  aff=asd
}
function draw() {
  // shader() sets the active shader with our shader
  shader(theShader);
  console.log(width);
  theShader.setUniform("u_resolution", [width*adf, height*adf]);
  theShader.setUniform("u_time", millis() / 1000.0);
  theShader.setUniform("u_mouse", [mouseX, map(mouseY, 0, height, height, 0)]);
  theShader.setUniform("u_canvas", [width, height]);

  theShader.setUniform("u_sel", af);
  theShader.setUniform("u_see", aff);


  // rect gives us some geometry on the screen
  rect(0,0,width, height);
}

//function windowResized(){
//  resizeCanvas(windowWidth, windowHeight);
//}
