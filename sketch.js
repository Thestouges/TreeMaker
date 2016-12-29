var radius = 10;
var dia = radius*2;
var points = [];
var x;
var y;

function setup() {
  createCanvas(600,600);
}

function draw() {
  background(200);
  mouseMoved();
  for(var i = 0; i < points.length; i++){
    points[i].show();
  }
  
}

function mouseMoved(){
  ellipse(mouseX, mouseY, dia, dia);
  return false;
}

function mousePressed(){
  var overlap = false;
  for(var i = 0; i < points.length; i++){
    var distance = dist(mouseX,mouseY, points[i].x,points[i].y);
    if(distance < radius*2)
      overlap = true;
  }
  
  if(!overlap){
    var loc = new Points(mouseX,mouseY,radius);
    points.push(loc);
    x = mouseX;
    y = mouseY;
  }
}

function mouseReleased(){
  var overlap = false;
  for(var i = 0; i < points.length; i++){
    var distance = dist(mouseX,mouseY, points[i].x,points[i].y);
    if(distance < radius*2){
      points[i].addLink(x,y);
      overlap = true;
    }
  }
  if(!overlap){
    points.pop();
  }
}