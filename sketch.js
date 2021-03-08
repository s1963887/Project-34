const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var hero;
var fly;
var backgroundImg;

function preload() {
backgroundImg = loadImage("GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(500, 500, 700, 20);

  hero = new Hero(200, 200, 40);

  fly = new Fly(hero.body, {x:200, y:350});


}

function draw() {
  background(backgroundImg);
  Engine.update(engine);

  hero.display();
  ground.display();
  fly.display();


  

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}
