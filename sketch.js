var cemiterio;
var cacador1, cacador2;
var player

function preload() {
  cemiterio = loadImage("assets/bg.jpeg");
  cacador1 = loadImage("assets/shooter_2.png");
  cacador2 = loadImage("assets/shooter_3.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  grave = createSprite(displayWidth/2, displayHeight/2, 200, 200);
  grave.addImage(cemiterio);
  grave.scale = 1.5

  player = createSprite(displayWidth -1450, displayHeight -300, 50, 50);
  player.addImage(cacador1);
  player.scale = 0.7
  player.debug = true
  player.setCollider("rectangle", 0, 0, 250, 300)
  
}

function draw() {
  background(0);  

  if(keyWentDown("space")){
    player.addImage(cacador2);
 
 
  } else if(keyWentUp("space")){
    player.addImage(cacador1);  
  }
  
  if(keyDown(UP_ARROW)){
    player.y = player.y - 30
}
 
if(keyDown(DOWN_ARROW)){
    player.y = player.y + 30
}


  drawSprites();
}