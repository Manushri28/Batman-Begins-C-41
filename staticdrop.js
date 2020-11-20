class StaticDrops {
    constructor(x, y, r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
 
      World.add(world, this.body);
    }
    display(){
      
      fill("black");
      var pos = this.body.position;
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.r);
    }
  };
