
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,300);
  
  monkey = createSprite(100,250,20,20);
  monkey.addAnimation("monnkey",monkey_running)
  monkey.scale=0.1;
 
  ground = createSprite(300,280,2000,10); 
  ground.velocityX=-4;
 
  foodGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0;
}


function draw() {
  background("red")
  
if(keyDown("space") && monkey.y>230){
  monkey.velocityY=-12
}
  monkey.velocityY = monkey.velocityY + 0.6
  
if(ground.x<0) {
  
  ground.x=ground.width/2
  
}
 monkey.collide(ground);
  
  banana();
obstacle();
 drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
  text("score:" + score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+survivalTime,100,50)
  
}
function  banana(){
 
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,400,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = -1;
    
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    foodGroup.add(banana);
   
  }
  
}

function obstacle(){
  if(frameCount % 150 === 0){
  var obstacle = createSprite(600,300,40,10);
    obstacle.y = Math.round(random(250,250));
    obstacle.addImage("stone",obstacleImage);
    obstacle.velocityX = -3;
    obstacle.scale = 0.15
    obstacle.lifetime = -1;
    obstacleGroup.add(obstacle);
  
  }
  
}



