var wall,thickness;
var bullet,speed,weight;
var object1,object2;

function setup() {
  createCanvas(1200,200);
  thickness=random(22,83);
  wall = createSprite(1000,200,thickness,height);
  bullet = createSprite(25,150,50,10);
  speed =(random(223,321));
  weight = (random(30,52));
  
}

function draw() {
  background(225);
  bullet.velocityX = speed;
  
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
  
  if(damage > 10){
    wall.shapeColor = color(255,0,0);
  }
  
  if(damage < 10){
    wall.shapeColor = color(0,255,0);
  }
  
  }

  
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  
  if(bulletRightEdge>=wallLeftEdge)
{
  return true;
}else{
  return false;
}
  
}