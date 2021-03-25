
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var bobObject1,roof1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
   bobObject1 = new ball(200,400,30,30);
   bobObject2 = new ball(230,400,30,30);
   bobObject3 = new ball(260,400,30,30);
   bobObject4 = new ball(290,400,30,30);
   bobObject5 = new ball(320,400,30,30);
   roof1=new roof(270,250,170,20);
   rope1=new Rope(bobObject1.body,roof1.body,-100*2,0);
   Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("white");
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
roof1.display();
rope1.display();

  drawSprites();

}



