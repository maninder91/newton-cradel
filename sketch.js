
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
 


function setup() {
	createCanvas(500, 400);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	 
	
	
	//Create a Ground
	roof1 = new roof();
	b1 = new bob(120,240);
	b2 = new bob(150,240);
	b3 = new bob(180,240);
	b4 = new bob(210,240);
	b5 = new bob(240,240);
	
	rope1= new Rope(b1.body,roof1.body,-50);
	rope2= new Rope(b2.body,roof1.body, -18);
	rope3= new Rope(b3.body,roof1.body,10);
	rope4= new Rope(b4.body,roof1.body,40);
	rope5 = new Rope(b5.body,roof1.body,70); 
 
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(230);
   
 roof1.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
  
	 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(b1.body,b1.body.position,{x:-1,y:-1});

	}
}
 

 






