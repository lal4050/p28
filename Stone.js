class Stone {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restution:0,
          friction:1,
          density:1.2
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r=r;
      World.add(world, this.body);
      this.image = loadImage("stone.png");
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      imageMode(CENTER);
      image(this.image,0, 0,this.r,this.r);
      pop();
    }
  };