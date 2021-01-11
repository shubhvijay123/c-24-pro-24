const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;


 ground = new Ground(600,650,1200,10);
 paper1 = new Paper(70,600,10)
 dustbin1 = new Dustbin(550,590,25,100);
 dustbin2 = new Dustbin(640,630,150,25)
 dustbin3 = new Dustbin(710,590,25,100);





	Engine.run(engine);
  


}

function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  Engine.update(engine);
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();
 
 // drawSprites();
 
}
function keyPressed(){

  if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper1.body,paper1.body.position , {x:0.8,y:-0.8});
  
 }
}


