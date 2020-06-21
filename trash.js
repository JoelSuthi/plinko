class Trash {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body1 = Bodies.rectangle(x,y,width,height,options);
      this.body2 = Bodies.rectangle(x,y,width,height,options);
      this.body3 = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("trash.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
      rect(pos.x, pos.y,150,20);
      imageMode(CENTER);
      image(this.image,pos.x,400,this.width,this.height);
  
    }
  };