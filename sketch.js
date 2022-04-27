var bg, iron;
var bgImg, ironImg;

 var  PLAY = 1;
 var END  = 0;
 var gameState  = 1;


function preload() {
  // astroidImg = loadImage("astroid.png");
  bgImg = loadImage("space.png");
  ironImg = loadImage("ironman.png");
  // thanosImg = loadImage("thanos.png");
  // endImg = loadImage("gameOver.png");
  // stone1Img = loadImage("redStone.png");
  // stone2Img = loadImage("soulStone.png");
  // stone3Img = loadImage("purpleStone.png");
  // stone4Img = loadImage("spaceStone.png");    
  // stone5Img = loadImage("yellowStone.png");
}

function setup() {
  createCanvas(400, 600);

  bg = createSprite(200,200);
  bg.addImage(bgImg);
  bg.velocity = 10

  iron = createSprite(70, 480, 50, 50);
  iron.addImage(ironImg);
  iron.scale = 0.7;

  // end = createSprite(200, 300);
  // end.addImage(endImg);

}

function draw() {
   if (gameState === PLAY) {
   background(0);
    iron.x = World.mouseX;}

    edges = createEdgeSprites();
    iron.collide(edges);


  // if (bg.y > 500){
  //   bg.y = height / 2;

  drawSprite();
  fill(255)
  }

