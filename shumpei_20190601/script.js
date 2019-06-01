var pic;
let angle = 0;
let jitter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  pic = loadImage("blue2.jpg");
}

function draw() {
 background(20); 
 if (mouseIsPressed) {
 if (second() % 2 === 0) {
    jitter = random(-0.05, 0.05);
  }
  angle = angle + jitter;
  let c = tan(angle);
  translate(width / 2, height / 2);
  rotate(c);
 imageMode(CENTER);
// blendMode(HARD_LIGHT);     
// stroke(random(200,255),random(200,255),255,200);
// strokeWeight(1);
// line(0,0,random(0,5000),random(0,5000));
// line(0,windowHeight,random(0,5000),random(0,5000));
// line(windowWidth,windowHeight,random(0,5000),random(0,5000));
// line(windowWidth,0,random(0,5000),random(0,5000));
//      
 fill(random(100,255),random(100,255), 255, 200);
// ellipse(windowWidth / 2, windowHeight / 2,random(100,1000));
 rect(0, 0,random(-1000,1000),random(-1000,-1000));
 rect(0, 0,-1*random(-1000,1000),-1*random(-1000,-1000));
 fill(0, 0, 255, 100);
// stroke(255);
 noStroke();
 strokeWeight(10);
 rect(0,0,random(-1000,1000),random(-1000,-1000));
 rect(0,0,-1*random(-1000,1000),-1*random(-1000,-1000));
     
 tint(random(100,255),random(100,255),random(255));
 image(pic,0,0,350,350);
  }
}


