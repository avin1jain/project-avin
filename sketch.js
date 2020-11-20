
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint


var engine, world;
var player;
var enemy;
var batImg;
var ballImg;
code();
function preload()
{
 batImg=loadImage("basebat.png")
 ballImg=loadImage("baseball1.png")
}

function setup() {
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
    rectMode(CENTER);
	createCanvas(1700,835);
	
	player=createSprite(850,417.5,40,40);
	player.addAnimation("avin",ballImg);
	player.scale=0.02


         camera.position.x=player.x;
		 camera.position=player.y
		 



}


function draw() {
 background("black");
banana();
mohitchottu();
  drawSprites();
  camera.position.x = displayWidth/2;
  camera.position.y = displayHeight/2;

}

function keyPressed() {
	if (keyCode === LEFT_ARROW) {
  
	  player.x=player.x-40;    
	 
  
	}else


	if (keyCode === RIGHT_ARROW) {
  
	  player.x=player.x+40;    
	 
  
	}else

	if (keyCode === UP_ARROW) {
  
	  player.y=player.y-40;    
	 
  
	}else

	if (keyCode === DOWN_ARROW) {
  
	  player.y=player.y+40;    
	 
  
	     }
	}

	  
function banana (){

   
	if(frameCount%20==0){
	var banana = createSprite(850,0, 300, 20);
	banana.velocityY=10;
	banana.addAnimation("bat",batImg);
	banana.scale=0.1;

	banana.x=round(random(1700,0)) 
  
	}
  } 
     
function mohitchottu () {
 if(banana.isTouching(player)){
     Text("hello",500,500)
 }
}





	
	
