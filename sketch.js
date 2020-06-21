function setup() {
  createCanvas(800,400);
  stable =createSprite(400, 200, 50, 50);
  square= createSprite(400,400,20,40);
  square.shapeColor="green";
  stable.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  square.y=mouseY;
  square.x=mouseX;
  if (square.x-stable.x<=(square.width/2+stable.width/2)&& stable.x-square.x<=(square.width/2+stable.width/2)
  &&square.y-stable.y<=(square.height/2+stable.height/2)&& stable.y-square.y<=(square.width/2+stable.width/2)){
    square.shapeColor="red";
    stable.shapeColor = "red";
  }
  else{
    square.shapeColor="green";
  stable.shapeColor = "green";
  }
  drawSprites();
}