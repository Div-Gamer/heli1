var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,dropA1,dropA2,dropA3,dropA1s,dropA2s,dropA3s,packageBody2,packageSprite2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	dropA1s=createSprite(400, 650, 200,10);
	dropA1s.shapeColor=color("red")

	dropA2s=createSprite(300, 610, 20,100);
	dropA2s.shapeColor=color("red")

	dropA3s=createSprite(500, 610, 20,100);
	dropA3s.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	dropA1 = Bodies.rectangle(400,650,100,20,{isStatic:true} )
	World.add(world, dropA1);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
 
  

  drawSprites();
 3
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:false});
	//World.add(world, packageBody);
	Matter.Body.setStatic(packageBody,false);
    
  }
}



