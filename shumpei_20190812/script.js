let angle = 0;
let cam ;

function setup(){
 createCanvas(displayWidth, displayHeight,WEBGL); 
 graphics = createGraphics(200,200);
 graphics.background(100,100,100,20);
}

function draw(){
 background(random(10,15),random(70,87),random(110,121));
// graphics.blendMode(BLEND);
 graphics.fill(15,87,121);
 graphics.stroke(random(220,255),random(220,255),random(220,255));
 graphics.strokeWeight(3);  
 graphics.rect(random(200),random(200),50,50);
 let dx = mouseX - width/2;
 let dy = mouseY - height/2;
 let v = createVector(dx,dy,0);
 v.div(10);
 //ambientLight(200);
 //directionalLight(255,random(255),random(255));
// translate(windowWidth/2,windowHeight/2);
// translate(mouseX - width/2,mouseY - height/2);
 rotateX(angle);
 rotateY(angle*1.1);
 rotateZ(angle*0.5);
 angle += 0.03;
 //fill(255);
 texture(graphics);
 //model(boar);
 box(3000);
 translate(mouseX - width/3,mouseY - height/3);
 box(320);
 translate(mouseX + width/3,mouseY + height/3);
 box(320);
}