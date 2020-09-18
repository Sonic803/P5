
   #ifdef GL_ES
 precision highp float;
 #endif

 uniform vec2 u_resolution;
 uniform float u_time;
 uniform vec2 u_mouse;
 uniform vec2 u_canvas;
 uniform float u_sel;
 uniform float u_see;



 float mande(vec2 _st,vec2 mo){
   vec2 ric=_st;
   float quando=u_see;
 	float x;
  float k=u_see;
   for(float i=0.;i<100000.;i++){
     if (i >= u_see){break;}
       x=ric.x;
      ric.x=ric.x*ric.x-ric.y*ric.y+mo.x;
      ric.y=2.*x*ric.y+mo.y;
     if(ric.x*ric.x+ric.y*ric.y>=4.){
       quando=i;
       return quando;
     }

   }
   return quando;

 }

 void main() {
     vec2 st = gl_FragCoord.xy/u_resolution.xy;
     vec2 mou=u_mouse/u_canvas;
     mou.y=1.-mou.y;
     //float zoo=1.+pow(mod(abs(8.-mod(u_time+8.,15.999999)),8.)/2.,10.);
     st*=4.;
     st-=4./2.;

     mou*=4.;
     mou-=4./2.;
    // mou=-mou;
    // st-=mou*zoo;
     //st/=zoo;
     float quante= 100.-1.;
     float color=mande(st,mou);
     float a=mod(abs(8.-mod(u_time*100.+8.,15.999999)),8.);

     float b=mod(abs(3.-mod(u_time*3.+3.,5.999999)),3.);
    float c=mod(abs(10.-mod(u_time*22.+10.,19.999999)),10.);

    if(u_sel==0.){
      gl_FragColor=vec4(mod(color,3.)/2.,mod(color+1.,6.)/5.,mod(color+3.,11.)/10.,1.0);

    }
    if(u_sel==1.){
      gl_FragColor=vec4(mod(color*color+1.,a)/7.,mod(color+1.,b)/2.,mod(color+1.,c)/9.,1.);
    }
    if(u_sel==2.){
      gl_FragColor=vec4(mod(0.0,a)/7.,mod(0.0,b)/2.,mod(pow(color,b)+1.,c)/9.,1.);
    }
}
