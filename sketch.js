function setup() { 
  createCanvas(1600,400); 
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50, 200, 25, 10);
  bullet.shapeColor = "black";
  bullet.velocityX = speed;
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = rgb(80,80,80);
}

function draw() {
  background(255);
  if(collide(bullet,wall)){ 
    bullet.velocityX = 0;
    deformation = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(deformation > 10){ 
      wall.shapeColor = "red";
    } 
    if(deformation < 10){ 
      wall.shapeColor = "green";
    }
  } 
  drawSprites();
}

function collide(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width/2;
  wallLeftEdge = lwall.x - lwall.width/2;
  if(bulletRightEdge > wallLeftEdge){
    return true;
  }
    return false; }
