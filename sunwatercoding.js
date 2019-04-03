var sunY = 238.5;

function setup() { 
  var Canvas = createCanvas(500, 500); 
    Canvas.parent('header') ;
}

function draw() {
    background(0,187,214);
  
  noStroke()
 fill(9,83,142);
 rect(0,370,500,130);
  
 fill(242,235,65) ;
 circle(260,sunY, 226/2);
  
  fill(247,126,6);
  circle(238,sunY, 226/2);

  sunY = sunY -1;
  
  if(sunY <=-100){
    sunY = 800
  }
}
  