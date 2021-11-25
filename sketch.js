const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ball1, ball2
var ground
var button

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    button = createImg("download.png")
    button.position(350, 70)
    button.size(50, 50)
    button.mouseClicked(buttonPress)

    box1 = new Box(200,300,50,50);
    box2= new Box(200, 100, 50, 100);
    ball1 = new Ball(100, 100, 25);
   // ball2 = new Ball(300, 350, 30);

  var options = {
      isStatic: true


  }
var balloptions = {

  restitution:0.4

}
ball3= Bodies.circle(80,100,30,balloptions)
World.add(world, ball3)
  ground= Bodies.rectangle(50, 380, 500, 20, options);
  World.add(world, ground)
  rectMode(CENTER)
  ellipseMode(RADIUS)
}



function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   ball1.display();
//  ball2.display();
  rect(ground.position.x, ground.position.y, 400, 20);
  ellipse(ball3.position.x, ball3.position.y, 30)
}


function buttonPress(){
Matter.Body.applyForce(ball3, {x:0,y:0},{x:0,y: -0.9})
}