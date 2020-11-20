class UmbrellaCumBruce {
    constructor(x, y, r) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      this.image = loadImage("walking_4.png")
 
      World.add(world, this.body);
    }
    display(){
      
      fill("black");
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, 390, 390);
    }
  };
