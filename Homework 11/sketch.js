var headX = 250;
var headY = 100;
var headDirection = 1;

var bodyX = 200;
var bodyY = 185;
var bodyDirection = 3;

var decoX = 200;
var decoY = 185
var decoDirection = 4;

var size = 22;
var count = 0;
var sizeDirection = 2;



function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(120);
    fill('red');
    circle(headX,headY,175);
    headX+=headDirection;
    if(headX >= 418 || headX <= 82)
    {
        headDirection *=-1;
    }

    textSize(24)
    text("Red Warrior",10,80);

    rect(200,bodyY,100,200)
    bodyY += bodyDirection
    if(bodyY <= 0 || bodyY >= 400)
    {
        bodyDirection*= -1;
    }

    ellipse(245,135,90,45)

    strokeWeight(10);
    fill(0);
    point(200,75);
    point(285,75);

    line(130,250,175,50);
    line(325,50,360,250);


    triangle(220,decoY,280,220,280,320)
    decoY += decoDirection
    if(decoY <= 0 || decoY >= 400)
    {
            decoDirection*= -1;
    }

    fill('#fae');
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count=0;
    }
    text("Matt Hartnett",270,500);

}