const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var umbrella;
var maxdrops = 100;
var drops = [];
var drop;
var circle;

var walking1, walking2, walking3, walking4;
var walking5, walking6, walking7, walking8;
var thunderBolt1_img, thunderBolt2_img, thunderBolt3_img, thunderBolt4_img;

var randBolt;

function preload(){
     
    thunderBolt1_img = loadImage("1.png")
    thunderBolt2_img = loadImage("2.png")
    thunderBolt3_img = loadImage("3.png")
    thunderBolt4_img = loadImage("4.png")

    bat1_img = loadImage("bat1.png")
    
}

function setup(){

  createCanvas(500,700);
    engine = Engine.create();
    world = engine.world;

    umbrella = new UmbrellaCumBruce(250, 490, 70, 500)

    umbrellaFalse = new Ground(250, 490, 90, 200);
    circle = new StaticDrops(250, 385, 50, 50);

    ground = createSprite(250, 650, 500, 100);
    ground.shapeColor = "white"

    divider = createSprite(250, 690, 500, 10);
    divider.shapeColor = "grey"

    bat1 = createSprite(150, 190, 10, 15);
    bat1.addImage(bat1_img)
    bat1.scale = 0.21;

    thunderBolt1 = createSprite(250, -150, 10, 15);
    thunderBolt1.addImage(thunderBolt1_img)
    thunderBolt1.lifetime = 12

    thunderBolt2 = createSprite(250, -150, 10, 15);
    thunderBolt2.addImage(thunderBolt2_img)
    thunderBolt1.lifetime = 12

    thunderBolt3 = createSprite(250, -150, 10, 15);
    thunderBolt3.addImage(thunderBolt3_img)
    thunderBolt1.lifetime = 12

    thunderBolt4 = createSprite(250, -150, 10, 15);
    thunderBolt4.addImage(thunderBolt4_img)
    thunderBolt1.lifetime = 12


    for(var i = 0; i < maxdrops; i++){
        drops.push(new spawnDrops(random(0, 500), random(0, 700), 2));
      }

    
}

function draw(){
    background(0);
    Engine.update(engine)
    
    bat1.display();
    ground.display();
    divider.display();
    circle.display();
    umbrellaFalse.display();
    umbrella.display();

    for(var i = 0; i < drops.length; i++){
        drops[i].display();
      }
      for(var x = 0; x < maxdrops; x++){
        drops[x].update();
      }

    
    randBolt = Math.round(random(1,4));
    switch(randBolt){
     case 1: thunderBolt1.display();
     break;
     case 2: thunderBolt2.display();
     break;
     case 3: thunderBolt3.display();
     break;
     case 4: thunderBolt4.display();
     break;
     default: break

    }    
}   

