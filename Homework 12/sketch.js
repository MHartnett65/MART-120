
var characterX = 100;
var characterY = 100;

var w = 87; 
var s = 83;
var a = 65;
var d = 68;


var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;


var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    createCharacter(200,350);
}

function draw()
{
    background(190,90,85);
    stroke(20);
    fill(0);
    
    createBorders(20);

    textSize(12);
    text("RUN!", width-50,height-50)

    drawCharacter();
    characterMovement();

    fill(100,120,30);
    circle(shapeX, shapeY, 30);

    circle(shapeY, shapeX, 40)
    
    fill(40,80,60);
    
    circle(shapeX, shapeY, 10);

     
     shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
     shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);

    
    shapeX += shapeXSpeed;
    shapeY += shapeYSpeed;
    
    if(shapeX > width)
    {
        shapeX = 0;
    }
    if(shapeX < 0)
    {
        shapeX = width;
    }
    if(shapeY > height)
    {
        shapeY = 0;
    }
    if(shapeY < 0)
    {
        shapeY = height;
    }

    
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(26);
        text("Victory!", width/2-50, height/2-50);
    }

   
    fill(40,60,80);
    circle(mouseShapeX, mouseShapeY, 25);
}

function characterMovement()
{
    
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
        console.log("movement: " + characterX);
    }
    if(keyIsDown(d))
    {
        characterX += 10;   
    }
}
function createCharacter(x,y)
{
    characterX = x;
    characterY = y;
    console.log(characterX);
    
    
   // circle(characterX,characterY,25);
}

function drawCharacter()
{
    fill(23,80,250);
    circle(characterX,characterY,25);
}
function createBorders(thickness)
{
    
    rect(0,0,width,thickness);
    
    rect(0,0,thickness,height);
    
    rect(0, height-thickness,width, thickness);
    
    rect(width-thickness,0,thickness,height-50);
}

function mouseClicked()
{
    mouseShapeX = mouseX;
    mouseShapeY = mouseY;
}
/*
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        characterX -= 10;
    } 
    else if (keyCode === RIGHT_ARROW) {
        characterX += 10;
    }
    else if (keyCode === UP_ARROW) {
        characterY -= 10;
    }
    else if (keyCode === DOWN_ARROW) {
        characterY += 10;
    }
  }
  */