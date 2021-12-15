var jake, jake_running;
var pathImg;
var walls, invisible_wall1, invisible_wall2;

function preload(){
  //pre-load images
  jake_running = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");

  pathImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  jake = createSprite(200, 310, 10, 10);
  jake.addAnimation("running", jake_running);

  invisible_wall1 = createSprite(10, 200, 10, 400);
  invisible_wall1.visible = false;

  invisible_wall2 = createSprite(390, 200, 10, 400);
  invisible_wall2.visible = false;

}

function draw() {
  background(0);


  if(path.y > 400){
  path.y = height/2;
  }

  jake.x = World.mouseX;

  jake.collide(invisible_wall1);
  jake.collide(invisible_wall2);

  drawSprites();
}
