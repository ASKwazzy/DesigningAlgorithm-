var fixRect, moveRect;

function setup() {
  createCanvas(800,400);
 fixRect = createSprite(400, 200, 50, 50);
 fixRect.shapeColor = "red";
 fixRect.debug = true;

 moveRect = createSprite(400,200,80,50);
 moveRect.shapeColor = "red";
 moveRect.debug = true;
}

function draw() {
  background(0,0,0); 

  moveRect.x = mouseX;
  moveRect.y = mouseY;

  if(moveRect.x - fixRect.x < moveRect.width/2 + fixRect.width/2&&
    fixRect.x - moveRect.x < moveRect.width/2 + fixRect.width/2&&
    moveRect.y - fixRect.y < moveRect.height/2 + fixRect.height/2&&
    fixRect.y - moveRect.y < moveRect.height/2 + fixRect.height/2){

      moveRect.shapeColor = "blue";
      fixRect.shapeColor = "blue";
    }else{
      moveRect.shapeColor = "red";
      fixRect.shapeColor = "red";
    }
  
  drawSprites();
}