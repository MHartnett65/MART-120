function setup()
{
    createCanvas(500, 600);
}

function draw()
{
    background(120);
    fill('red');
    circle(250,100,175);

    textSize(24)
    text("Red Warrior",10,80);

    rect(200,187,100,200)

    ellipse(245,135,90,45)

    strokeWeight(10);
    fill(0);
    point(200,75);
    point(285,75);

    line(130,250,175,50);
    line(325,50,360,250);


    triangle(220,320,280,220,280,320)

    fill('#fae');
    textSize(35);
    text("Matt Hartnett",270,500);

}