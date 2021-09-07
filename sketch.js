
var a,b;
var car,wall


function setup() {
  createCanvas(1200,800);
  a=createSprite(400, 200, 50, 100);
  b=createSprite(650,200,100,50);
  a.shapeColor="green"
  b.shapeColor="green"
a.velocityX=4

car=createSprite(200,200,50,50)
wall=createSprite(1000,200,50,200)
car.shapeColor="blue"
wall.shapeColor="purple"
car.velocityX=5
}

function draw() {
  background(255,255,255);  
b.x=World.mouseX
b.y=World.mouseY
bOff(a,b)


if(touchCheck(car,wall))
  {
   car.velocityX=0

  }
drawSprites();
}




