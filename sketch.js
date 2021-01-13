const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world,engine;
var polygon;

function preload() {

}

function setup(){
    engine = Engine.create();
    world = engine.world;

    var canvas = createCanvas(1200,400);

    ground = new Ground(600,height,1200,20);

polygon = Bodies.circle(50,200,20);
World.add(world.polygon);

    slingshot = new SlingShot(polygin.body,{x:190, y:50});

    Engine.run(engine);
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);

    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
