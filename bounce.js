function setup() {
    createCanvas(800,400);
    stable =createSprite(400, 200, 50, 50);
    square= createSprite(200,200,20,40);
    square.shapeColor="green";
    stable.shapeColor = "green";
    squareX= 1;
    squareY=0;
    square.velocityY=squareY;
    square.velocityX=squareX;
    // stable.velocityY=1;
  }
  
  function draw() {
    background(255,255,255);  
    if (square.x-stable.x<=(square.width/2+stable.width/2)&& stable.x-square.x<=(square.width/2+stable.width/2)
    &&square.y-stable.y<=(square.height/2+stable.height/2)&& stable.y-square.y<=(square.width/2+stable.width/2)){
      square.velocityX*=-1;
      square.velocityY*=-1;
    }
    if (square.x-stable.x<=(square.width/2+stable.width/2)&& stable.x-square.x<=(square.width/2+stable.width/2)
    &&square.y-stable.y<=(square.height/2+stable.height/2)&& stable.y-square.y<=(square.width/2+stable.width/2)){
    //   stable.velocityX=squarev*-1;
    stable.velocityY=squareY;
    stable.velocityX=squareX;
    }
    drawSprites();
  }