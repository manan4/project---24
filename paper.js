class Paper{
    constructor(x,y,radius){
   var options = {
       isStatic:false,
       restitution:0.03,
    //   friction:40,
      density:10
    }
    this.body = Bodies.circle(x,y,radius,options);
this.radius = radius;
  World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    ellipseMode(RADIUS);
    fill("white");
    ellipse(pos.x,pos.y,this.radius);
}
};