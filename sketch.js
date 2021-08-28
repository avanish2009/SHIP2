var sea,ship;
var seaImg;

function preload(){
seaImg = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png", "ship-2.png","ship-3.png", "ship-4.png")
}                       


function setup(){
  createCanvas(400,400);
  background("blue");

//moving background
sea = createSprite(400, 200);
sea.addImage(seaImg);
sea.velocityx = -5;
sea.scale= 0.3;


ship = createSprite(130, 200, 30, 30);
ship.addAnimation("movingShip", shipImg1);
ship.scale= 0.25
}

// code to reset the background
function draw() {
 background(0);
 sea.velocityX = -3;



if(sea.x <0){ship.x=ship.width/2}


  drawSprites();
}