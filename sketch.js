
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score, ground, survival;

function preload() {
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

 
}



function setup() {
  createCanvas(400,400)
  monkey = createSprite(0,330)
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.15;
  ground = createSprite(300,390,900,20);
  ground.velocityX = -10;
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  survival = 0;
  score = 0;
}


function draw() {
  background("white");
 monkey.collide(ground);
 if(ground.x < 0);
    ground.x = ground.width/2;
 if(keyDown("space"))
   monkey.velocityY = -10;
 monkey.velocityY = monkey.velocityY + 0.8;
  spawnBanana();
  spawnObstacles();
  drawSprites();
  stroke("white");
  textSize(20)
  fill("white")
  text("Score: " + score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black")
  survival = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survival, 100, 50)
}

function spawnBanana() {
  if(frameCount % 80 === 0) {
    var banana = createSprite(400,Math.round(random(120,200)))
    banana.addImage(bananaImage)
    banana.velocityX = -6;
    banana.scale = 0.15;
    banana.lifetime = 70;
    FoodGroup.add(banana)
  }
}

function spawnObstacles() {
   if(frameCount % 100 === 0) {
    var obstacle = createSprite(400,380)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -6;
    obstacle.lifetime = 70;
    obstacle.scale = 0.2
    obstacleGroup.add(obstacle)
     
  }
  
  
  
  
}




