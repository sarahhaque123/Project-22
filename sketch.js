var starImg,bgImg;
var star, starBody;
var fairy, fairyAnimation, music;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyAnimation = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	music = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	music.play();
	//create fairy sprite and add animation for fairy
	fairy = createSprite(150, height - 200, 50, 50);
	fairy.addAnimation("fair", fairyAnimation);
	fairy.scale = 0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy

  if(star.y > 525 && starBody.position.y > 525){
	  Matter.Body.setStatic(starBody,true);
  }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	if(keyIsDown(LEFT_ARROW)){
		fairy.velocityX = -2;
	}
	if(keyIsDown(RIGHT_ARROW)){
		fairy.velocityX = 2;
	}
	
}
 