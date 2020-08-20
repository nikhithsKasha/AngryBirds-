class Box {

constructor(x,y,width,height){
isStatic:true
    var options= {
        restitution: 0.2
    }
    this.body = Bodies.rectangle(x,y,this.width,this.height,options);
    World.add(world,this.body);
}
display(){
    var pos= this.body.position;
    rectMode(CENTER);
    fill(255);
    rect(pos.x, pos.y,this.width, this.height);
}
}
