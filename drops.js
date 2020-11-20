class spawnDrops {
    constructor(x, y, r) {
      var options = {
          isStatic: false,
          friction:5
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
 
      World.add(world, this.body);
    }
    display(){
      
      fill("skyblue");
      var pos = this.body.position;
      ellipseMode(RADIUS);
      ellipse(pos.x, pos.y, this.r);
    }

    update(){
      if(this.body.position.y > height){
          Matter.Body.setPosition(this.body, {x:random(0, 500), y:random(0, 500)})
      }
      }
  };
