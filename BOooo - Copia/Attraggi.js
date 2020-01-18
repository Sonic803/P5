//var K=50

var v=true
function Attraggi(a,b,K){
  var posa = a.body.position;
  var posb = b.body.position;
  var dist2=(posa.x-posb.x)*(posa.x-posb.x)+(posa.y-posb.y)*(posa.y-posb.y)
  var prod=a.body.mass
  var forc=K*prod/dist2;
  var X=posa.x-posb.x
  var Y=posa.y-posb.y
  var k=0
  if(posa.x-posb.x<0){
    k=1;
  }
  var alf=Math.atan(Y/-X)+k*3.14
  var forcx=(Math.cos(alf)*forc)
  var forcy=(Math.sin(alf)*forc)
  if(v){
    a.force(-forcx,forcy)
  //  b.force(forcx,-forcy)
  }else{
    a.force(forcx,-forcy)
  //  b.force(-forcx,forcy)
  }


}
