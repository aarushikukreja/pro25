
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper, ground
var dustbinLeft, dustbinRight, dustbinBottom
var dustbin, dustbinImg

function preload()
{
	dustbinImg= loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

dustbin=createSprite(600, 585, 200, 20)
dustbin.addImage(dustbinImg)
dustbin.scale=0.6

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper= new Paper(50, 100, 70)
ground= new Ground(400, 690, 800, 15)
dustbinLeft= new Dustbin(600,675,100,20);
dustbinRight= new Dustbin(660,585, 20,200);
dustbinBottom= new Dustbin(540,585,20,200);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  dustbinLeft.display()
  dustbinRight.display()
  dustbinBottom.display()
  ground.display()
	  paper.display()
  
  drawSprites();
 
}
 function keyPressed(){
	 if(keyCode === UP_ARROW){
		 Matter.Body.applyForce(paper.body, paper.body.position, {x:110, y:-150 })
	 }
 }


