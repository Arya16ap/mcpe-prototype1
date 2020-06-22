
var tree;
var player;
var inventory;
var i1,i2,i3,i4,l5;
var craft;
var c,r;
var plank;
var gameState = "l1";

function setup() {
  createCanvas(600,600);
 player = createSprite(300,300,20,20);
 player.shapeColor = "black";

 inventory = createSprite(300,500,300,50);

 i1 = createSprite(150,500,50,50);
 i1.shapeColor = "white";

 i2 = createSprite(210,500,50,50);
 i2.shapeColor = "white";

 i3 = createSprite(270,500,50,50);
 i3.shapeColor = "white";

 i4 = createSprite(330,500,50,50);
 i4.shapeColor = "white";

 i5 = createSprite(390,500,50,50);
 i5.shapeColor = "white";

 

 craft = createSprite(300,300,300,300);
 craft.shapeColor = "yellow";
 craft.visible = false;

 c = createSprite(200,200,30,30);
c.visible = false;

r = createSprite(400,200,30,30);
r.visible = false;

tree = createSprite(100,100,20,20);
 tree.shapeColor = "brown";

 plank = createSprite(400,200,20,20);
 plank.shapeColor = "black";
 plank.visible = false;

}

function draw() {
  if(gameState === "l1"){
    background("green");
   
    if(keyDown("W")){
      player.velocityX = 0;
      player.velocityY = -2;
    }
    if(keyDown("SPACE")){
     player.velocityX = 0;
     player.velocityY = 0;
   }
   if(keyDown("S")){
     player.velocityX = 0;
     player.velocityY = 2;
   }
   if(keyDown("A")){
     player.velocityX = -2;
     player.velocityY = 0;
   }
   if(keyDown("D")){
     player.velocityX = 2;
     player.velocityY = 0;
   }
   if((player).collide(tree)){
     
     tree.x = 150;
     tree.y= 500;
   }
   if(keyDown("E")){
     craft.visible = true;
     c.visible = true;
     r.visible = true;
   }
   if(keyDown("F")){
     craft.visible = false;
     c.visible = false;
     r.visible = false;
   }
 
   if(mousePressedOver(tree)){
     tree.x = 200;
     tree.y = 200;
   }
   if(mousePressedOver(c)){
     plank.visible = true;
   }
 
   if(mousePressedOver(plank)){
     plank.x = 150;
     plank.y  = 500;
     tree.visible = false;
   }
   if(mousePressedOver(i2)){
     gameState = "l2";
   }
  }
  if(gameState === "l2"){
    background("green")
    plank.x = World.mouseX;
    plank.y = World.mouseY;
  }
  if(keyDown("H")){
    plank.x = mouseX;
    plank.y = mouseY
  }
  
  
  

  drawSprites();
}
