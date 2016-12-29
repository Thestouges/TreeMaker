function Points(x,y,r){
  this.x = x;
  this.y = y;
  this.r = r;
  this.link = [];
  
  this.show = function(){
    fill(255, 255, 255);
    for(var i = 0; i < this.link.length; i++){
      line(this.x,this.y,this.link[i].x,this.link[i].y);
      var d = int(dist(this.x, this.y, this.link[i].x, this.link[i].y))
      push();
      translate( (this.x+this.link[i].x)/2, (this.y+this.link[i].y)/2 );
      rotate( atan2(this.link[i].y-this.y,this.link[i].x-this.x) );
      text(nfc(d,1,1), 0, -5);
      pop();
    }
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }
  
  this.addLink = function(x,y){
    var target = new Points(x,y);
    this.link.push(target);
  }
}