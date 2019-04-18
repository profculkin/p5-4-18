//variables for horizontal position and diameter of ellipse
var xPos = 0;
var diam1 = 50;

function setup() {
  // put setup code here
  createCanvas(700,500); 
    
}

function draw() {
    background("#FF0000");
    //add colors for fill and stroke
    fill("#f1f442");
    stroke("#FFFFFF");
    strokeWeight(10);
    ellipse(xPos, height/2, diam1, diam1);
    //increase the value of xPos so it moves
    xPos = xPos + 10;
    //set up xPos back to 0
    if(xPos >= width){
        xPos = 0;   
    }
    textSize(30);
    noStroke();
    text("p5 example MMP 100", 200, 200);  
}

function mousePressed(){
    diam1 = diam1 + 50;
    if (diam1 >= height){
        diam1 = 50;
    }
}