let circle = [];
let square = [];
let morph = [];
let state = false;
//let j = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let angle = 0; angle < 360; angle += 9) {
    let v = p5.Vector.fromAngle(radians(angle - 135));
    v.mult(150);
    circle.push(v);
    morph.push(createVector());
  }

  for (let x = -100; x < 100; x += 100) {
    square.push(createVector(random(10), -random(10)));
  }
  // Right side
  for (let y = -100; y < 100; y += 100) {
    square.push(createVector(random(10), -random(10)));
  }
  // Bottom
  for (let x = 100; x > -100; x -= 10) {
    square.push(createVector(-random(10), random(10)));
  }
  // Left side
  for (let y = 100; y > -100; y -= 10) {
    square.push(createVector(-random(10), -random(10)));
  }
}

function draw() {
  background(0);
    
  fill(255);
  noStroke();
  textFont('Oswald');
  textAlign(LEFT);
  textSize(22);
  text('NUMBER', 25, 40);
  textSize(50);
  text('182', 25, 100);
  textSize(22);
  textAlign(RIGHT);
  text('@shumpei0407', width - 50, height - 50);

  let totalDistance = 0;
  for (let i = 0; i < circle.length; i++) {
    let v1;
    if (state) {
      v1 = circle[i];
    } else {
      v1 = square[i];
    }
    let v2 = morph[i];
    v2.lerp(v1, 0.1);
    totalDistance += p5.Vector.dist(v1, v2);
  }

  if (totalDistance < 0.1) {
    state = !state;
  }

  translate(width / random(1.9,2), height / random(1.9,2));
  rotate(frameCount/2);
  strokeWeight(random(1,50));
  beginShape();
  fill(5);
  stroke(255);

  morph.forEach(v => {
    vertex(v.x, v.y);
  });
  endShape(CLOSE);
    
    
}