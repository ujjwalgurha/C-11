var path,boy,rightBoundary,leftBoundary;
var  pathImage;
var boy,boyAnimation;


function preload(){
pathImage = loadImage("path.png") ;
boyAnimation = loadAnimation ("Runner-1.png","Runner-2.png");


}

function setup(){
  createCanvas(400,400);

path=createSprite(200,200 );
path.addImage(pathImage);
path.velocityY = 6;
path.scale = 1.2;

boy = createSprite(180,349,30,30);
boy.addAnimation ("run",boyAnimation);
boy.scale=0.08;


leftBoundary=createSprite(0,0,100,803)
leftBoundary.visible = false;





rightBoundary=createSprite(410,1,101,803)
rightBoundary.visible = false;
}



function draw() {
  background(0);

path.velocityY = 6;

boy.x = World.mouseX;
  
edges=createEdgeSprites();
boy.collide(edges[3]);
boy.collide(leftBoundary);
boy.collide(rightBoundary);


if (path.y>400){
path.y = height/2;
}

  drawSprites();

}                        