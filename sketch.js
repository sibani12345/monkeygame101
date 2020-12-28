
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            
    loadImage("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.p","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite (80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.5;
  
  ground = createSprite(400,350,900,10);
  ground.velocityy = -4;
  ground.Y = ground.width/2;

  
}


function draw() {
 createCanvas(400,400);
  background("white");
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  monkey.scale=0.1;
  
  FoodGroup();
  obstacleGroup();
  
  drawSprites();
}

function FoodGroup(){
  if(frameCount % 60 === 0){
    var banana = createSprite(600,300,40,10);
    banana.addImage(bananaImage);
    banana.scale=0.1;
    banana.y= Math.round(random(280,320))
    banana.velocityX =-3;
  }
}

function obstacleGroup(){
  if(frameCount % 60 ===0){
    var obstacle = createSprite(600,300,40,10);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.y=Math.round(random(280,320))
    obstacle.velocityX= -3;
    
  }
}



